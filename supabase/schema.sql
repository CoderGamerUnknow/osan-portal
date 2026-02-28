-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  name text,
  whatsapp text,
  city text,
  blood_group text,
  status text check (status in ('Pending', 'Verified')) default 'Pending',
  is_blood_donor boolean default false,
  is_admin boolean default false,
  badges text[] default '{}'
);

-- Set up Row Level Security (RLS)
alter table profiles
  enable row level security;

-- Policies

-- 1. Public profiles are viewable only by verified users.
create policy "Verified users can view verified profiles" on profiles
  for select
  using (
    -- The requester must be verified (or admin), AND the target must be verified
    (select status from profiles where id = auth.uid()) = 'Verified'
    and
    status = 'Verified'
  );

-- 2. Users can insert their own profile.
create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

-- 3. Users can update their own profile.
create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- 4. Admins can do everything
create policy "Admins can do everything" on profiles
  for all using (
    (select is_admin from profiles where id = auth.uid()) = true
  );


-- Trigger to automatically create a profile for a new user
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
