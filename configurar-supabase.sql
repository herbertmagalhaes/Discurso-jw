-- CONFIGURAÇÃO DO SUPABASE — Discursos Públicos
-- Execute no SQL Editor do projeto Supabase depois de fazer backup.
-- Não apaga os registros existentes da tabela oradores.

create table if not exists public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  criado_em timestamptz not null default now()
);

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.site_admins where user_id = auth.uid());
$$;

revoke all on function public.is_site_admin() from public;
grant execute on function public.is_site_admin() to authenticated;

alter table public.site_admins enable row level security;
drop policy if exists "Usuário vê seu próprio status de administrador" on public.site_admins;
create policy "Usuário vê seu próprio status de administrador"
on public.site_admins for select to authenticated
using (user_id = auth.uid());
drop policy if exists "Somente administrador gerencia administradores" on public.site_admins;
create policy "Somente administrador gerencia administradores"
on public.site_admins for all to authenticated
using (public.is_site_admin()) with check (public.is_site_admin());

-- Oradores: todos os usuários autenticados podem consultar, cadastrar e editar.
-- Somente o administrador pode excluir.
alter table public.oradores enable row level security;
do $$
declare p record;
begin
  for p in select policyname from pg_policies
    where schemaname='public' and tablename='oradores'
  loop
    execute format('drop policy if exists %I on public.oradores', p.policyname);
  end loop;
end $$;

drop policy if exists "Usuários autenticados consultam oradores compartilhados" on public.oradores;
create policy "Usuários autenticados consultam oradores compartilhados"
on public.oradores for select to authenticated using (true);
drop policy if exists "Usuários autenticados cadastram oradores" on public.oradores;
create policy "Usuários autenticados cadastram oradores"
on public.oradores for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "Usuários autenticados editam oradores compartilhados" on public.oradores;
create policy "Usuários autenticados editam oradores compartilhados"
on public.oradores for update to authenticated using (true) with check (true);
drop policy if exists "Somente administrador exclui oradores" on public.oradores;
create policy "Somente administrador exclui oradores"
on public.oradores for delete to authenticated using (public.is_site_admin());

-- Marcações compartilhadas: todos veem e alteram o mesmo estado por número de discurso.
create table if not exists public.discurso_marcacoes_compartilhadas (
  discurso_numero integer primary key,
  status text not null check (status in ('sim','nao')),
  atualizado_por uuid references auth.users(id) on delete set null,
  atualizado_em timestamptz not null default now()
);
alter table public.discurso_marcacoes_compartilhadas add column if not exists riscado boolean not null default false;
alter table public.discurso_marcacoes_compartilhadas enable row level security;
drop policy if exists "Usuários consultam marcações compartilhadas" on public.discurso_marcacoes_compartilhadas;
create policy "Usuários consultam marcações compartilhadas"
on public.discurso_marcacoes_compartilhadas for select to authenticated using (true);
drop policy if exists "Usuários salvam marcações compartilhadas" on public.discurso_marcacoes_compartilhadas;
create policy "Usuários salvam marcações compartilhadas"
on public.discurso_marcacoes_compartilhadas for insert to authenticated with check (true);
drop policy if exists "Usuários atualizam marcações compartilhadas" on public.discurso_marcacoes_compartilhadas;
create policy "Usuários atualizam marcações compartilhadas"
on public.discurso_marcacoes_compartilhadas for update to authenticated using (true) with check (true);
drop policy if exists "Somente administrador apaga marcações compartilhadas" on public.discurso_marcacoes_compartilhadas;
create policy "Somente administrador apaga marcações compartilhadas"
on public.discurso_marcacoes_compartilhadas for delete to authenticated using (public.is_site_admin());

-- Temas personalizados compartilhados.
create table if not exists public.discursos_temas_extras (
  numero integer primary key,
  titulo text not null check (length(trim(titulo)) > 0),
  criado_por uuid references auth.users(id) on delete set null,
  criado_em timestamptz not null default now()
);
alter table public.discursos_temas_extras enable row level security;
drop policy if exists "Usuários consultam temas personalizados" on public.discursos_temas_extras;
create policy "Usuários consultam temas personalizados"
on public.discursos_temas_extras for select to authenticated using (true);
drop policy if exists "Usuários cadastram temas personalizados" on public.discursos_temas_extras;
create policy "Usuários cadastram temas personalizados"
on public.discursos_temas_extras for insert to authenticated with check (criado_por = auth.uid());
drop policy if exists "Usuários editam temas personalizados" on public.discursos_temas_extras;
create policy "Usuários editam temas personalizados"
on public.discursos_temas_extras for update to authenticated using (true) with check (true);
drop policy if exists "Somente administrador remove temas personalizados" on public.discursos_temas_extras;
create policy "Somente administrador remove temas personalizados"
on public.discursos_temas_extras for delete to authenticated using (public.is_site_admin());

-- Depois de criar sua conta no site, descubra o UUID dela em Authentication > Users.
-- Substitua COLE-SEU-UUID-AQUI pelo UUID da sua própria conta e execute:
-- insert into public.site_admins (user_id) values ('COLE-SEU-UUID-AQUI')
-- on conflict (user_id) do nothing;
