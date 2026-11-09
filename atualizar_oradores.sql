-- MIGRACAO PARA CORRIGIR O CADASTRO DE ORADORES
-- Execute no Supabase > SQL Editor > New query.
-- Nao apaga os oradores ja cadastrados.

begin;

alter table public.oradores
  add column if not exists user_id uuid references auth.users(id) on delete set null;

alter table public.oradores enable row level security;

drop policy if exists "Usuários autenticados consultam oradores compartilhados" on public.oradores;
create policy "Usuários autenticados consultam oradores compartilhados"
  on public.oradores for select to authenticated
  using (true);

drop policy if exists "Usuários autenticados cadastram oradores" on public.oradores;
create policy "Usuários autenticados cadastram oradores"
  on public.oradores for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "Usuários autenticados editam oradores compartilhados" on public.oradores;
create policy "Usuários autenticados editam oradores compartilhados"
  on public.oradores for update to authenticated
  using (true)
  with check (true);

drop policy if exists "Somente administrador exclui oradores" on public.oradores;
create policy "Somente administrador exclui oradores"
  on public.oradores for delete to authenticated
  using (public.is_site_admin());

commit;

-- Se o cadastro ainda falhar por outra coluna ausente, copie a mensagem exata
-- mostrada pelo site. Nao execute alteracoes adicionais sem conferir o esquema.
