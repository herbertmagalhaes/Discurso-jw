-- MIGRAÇÃO: campos para lembretes de discursos
-- Execute uma única vez no SQL Editor do projeto Supabase atual.
-- Não remove nem altera os dados já existentes.

alter table public.oradores
  add column if not exists telefone text,
  add column if not exists endereco_local text;

comment on column public.oradores.telefone is 'Número de WhatsApp do orador em formato internacional, preferencialmente com código do país e DDD.';
comment on column public.oradores.endereco_local is 'Endereço do local onde será realizado o discurso público.';
