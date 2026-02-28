-- Create tables for Community Chat and Help Desk
create table messages (
  id uuid default gen_random_uuid() primary key,
  sender_id uuid references auth.users not null,
  receiver_id uuid references auth.users null, -- NULL means it's a group chat message
  content text not null,
  created_at timestamp with time zone default now()
);

create table help_requests (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  status text check (status in ('Please wait', 'Resolved')) default 'Please wait',
  message text not null,
  created_at timestamp with time zone default now()
);

-- RLS

alter table messages enable row level security;
alter table help_requests enable row level security;

-- 1. Anyone verified can read Group Chat messages (receiver_id is null)
create policy "Verified users can read group chat" on messages
  for select
  using (
    receiver_id is null and
    (select status from profiles where id = auth.uid()) = 'Verified'
  );

-- 2. Users can read DMs where they are either sender or receiver
create policy "Users can read their DMs" on messages
  for select
  using (
    (auth.uid() = sender_id or auth.uid() = receiver_id) and
    (select status from profiles where id = auth.uid()) = 'Verified'
  );

-- 3. Verified users can insert messages
create policy "Verified users can insert messages" on messages
  for insert
  with check (
    auth.uid() = sender_id and
    (select status from profiles where id = auth.uid()) = 'Verified'
  );

-- Help requests: users can read and insert their own
create policy "Users can read own help requests" on help_requests
  for select using (auth.uid() = user_id);

create policy "Users can insert own help requests" on help_requests
  for insert with check (auth.uid() = user_id);

-- Admins can do everything on help requests
create policy "Admins can view all help requests" on help_requests
  for all using (
    (select is_admin from profiles where id = auth.uid()) = true
  );

-- Enable realtime on the messages table
-- This requires running `alter publication supabase_realtime add table messages;`
-- in the Supabase SQL editor manually if the project hasn't auto-setup realtime.
