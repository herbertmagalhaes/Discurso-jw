-- Atualização para permitir riscar/restaurar temas com sincronização entre todos os usuários.
-- Execute uma única vez no Supabase > SQL Editor > New query.
alter table public.discurso_marcacoes_compartilhadas
  add column if not exists riscado boolean not null default false;
