-- Tabela de produtos
CREATE TABLE public.estoque (
	id_produto SERIAL PRIMARY KEY,
	nome_produto varchar(255) NOT NULL,
	descricao_produto varchar(512) NOT NULL,
	tamanho_produto varchar(15) NOT NULL,
	tipo_produto varchar(255) NULL,
	nome_doador varchar(255) NULL,
	dt_insert DATE NOT NULL DEFAULT CURRENT_DATE
);
CREATE INDEX estoque_id_produto_idx ON public.estoque (id_produto);
CREATE INDEX estoque_nome_produto_idx ON public.estoque (nome_produto,id_produto);
COMMENT ON TABLE public.estoque IS 'Tabela de produtos recebidos!';
-------

insert into public.estoque (nome_produto, descricao_produto, tamanho_produto, tipo_produto, nome_doador) values
  ('calça','calça jeans em perfeito estado','40','Roupas','n/a');
-------

 ----- Tabela doações:
 
 
 
SELECT id_produto, nome_produto, descricao_produto, tamanho_produto, tipo_produto, nome_doador, dt_insert FROM public.estoque;
-------

select * from public.estoque;



-- Tabela de pessoas
CREATE TABLE public.pessoas (
	id_pessoa SERIAL PRIMARY KEY,
	rg_pessoa int NULL,
	nome_pessoa varchar(512) NOT NULL,
	idade_pessoa int NULL,
	tamanho_camiseta varchar(255) NULL,
	tamanho_calca varchar(255) NULL,
	dt_insert DATE NOT NULL DEFAULT CURRENT_DATE
);
CREATE INDEX pessoa_id_pessoa_idx ON public.pessoas (id_pessoa);
CREATE INDEX pessoa_nome_produto_idx ON public.pessoas (nome_pessoa,id_pessoa);
COMMENT ON TABLE public.pessoas IS 'Tabela de pessoas que recebem doações!';
-------
select * from pessoas;
-------
ALTER TABLE public.pessoas RENAME COLUMN tamanho_calcaco TO tamanho_calcado;
---=----
insert into public.pessoas (rg_pessoa, nome_pessoa, idade_pessoa, tamanho_camiseta, tamanho_calca, tamanho_calcado) values
  ('365421327','Oseias','23','M','G','45');
------- Tabela Doações 
 CREATE TABLE public.doacoes (
	id_doacao SERIAL PRIMARY KEY,
	id_produto varchar(255) NOT NULL,
	id_pessoa varchar(512) NOT NULL,
	nome_produto varchar(15) NOT NULL,
	descricao_doacao varchar(255) NULL,
	qtd varchar(255) NULL,
	dt_insert DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE INDEX doacoes_id_doacao_idx ON public.doacoes (id_doacao);
COMMENT ON TABLE public.doacoes IS 'Tabela de itens doados!';

-----------------------------------------------------------------------------

select * from public.doacoes
--insert into public.doacoes (rg_pessoa, nome_pessoa, idade_pessoa, tamanho_camiseta, tamanho_calca, tamanho_calcado) values
  -- ('365421327','Oseias','23','M','G','45');

----------------------------------------------------------------------------
-- insert into tarefas (descricao, data, realizado, categoria_id) values 
--   ('Pagar conta de energia', '2018-10-03 10:00:00', false, 1),
--   ('Inciar o trabalho de ED', '2018-10-03 12:00:00', false, 2),
--   ('Abastecer o carro', '2018-10-04 00:00:00', true, 1),
--   ('Pagar conta de água', '2018-11-12 10:00:00', true, 1),
--   ('Entregar trabalho de ED', '2018-11-14 19:00:00', false, 2),
--   ('Entregar trabalho de Meio Ambiente', '2018-11-15 19:00:00', false, 2),
--   ('Verificar folha de ponto', '2018-12-13 19:00:00', false, 4),
--   ('Entregar capítulo introducao', '2018-11-28 19:00:00', false, 3);
