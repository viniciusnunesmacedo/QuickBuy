﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validacao()
        {
            if (string.IsNullOrEmpty(Nome))
            {
                AdicionarMensagemValidacao("Nome deve estar preenchido");
            }

            if (string.IsNullOrEmpty(Descricao))
            {
                AdicionarMensagemValidacao("Descrição deve estar preenchido");
            }
        }
    }
}
