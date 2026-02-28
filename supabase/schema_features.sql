-- Create Business Directory Table
create table business_directory (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  business_name text not null,
  category text not null,
  description text,
  contact_info text,
  created_at timestamp with time zone default now()
);

alter table business_directory enable row level security;

-- Only verified users can view the business directory
create policy "Verified users can view business directory" on business_directory
  for select
  using (
    (select status from profiles where id = auth.uid()) = 'Verified'
  );

-- Users can insert their own business
create policy "Users can insert their own business" on business_directory
  for insert with check (auth.uid() = user_id);

-- Create Wall of Fame Table
create table wall_of_fame (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  achievement_type text not null,
  details text,
  image_url text,
  is_approved boolean default false,
  created_at timestamp with time zone default now()
);

alter table wall_of_fame enable row level security;

-- Verified users can only view approved achievements
create policy "Verified users can view approved achievements" on wall_of_fame
  for select
  using (
    is_approved = true and
    (select status from profiles where id = auth.uid()) = 'Verified'
  );

-- Users can submit their own achievements (pending admin approval)
create policy "Users can submit own achievements" on wall_of_fame
  for insert with check (auth.uid() = user_id);

-- Admins can manage everything
create policy "Admins can manage achievements" on wall_of_fame
  for all using (
    (select is_admin from profiles where id = auth.uid()) = true
  );

-- PostgreSQL Views to join with profiles securely

-- Business View
create view public.business_directory_view as
  select 
    b.id,
    b.business_name,
    b.category,
    b.description,
    b.contact_info,
    p.name as owner_name,
    p.whatsapp as owner_whatsapp
  from business_directory b
  join profiles p on b.user_id = p.id;

-- Achievement View
create view public.wall_of_fame_view as
  select
    w.id,
    w.achievement_type,
    w.details,
    w.image_url,
    p.name as achiever_name
  from wall_of_fame w
  join profiles p on w.user_id = p.id
  where w.is_approved = true;

-- Important: Grant access to the views
grant select on public.business_directory_view to authenticated;
grant select on public.wall_of_fame_view to authenticated;
