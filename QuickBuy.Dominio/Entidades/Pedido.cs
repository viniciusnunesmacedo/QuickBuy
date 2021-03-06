﻿using QuickBuy.Dominio.ObjetoValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string Cep { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public string NumeroEndereco { get; set; }

        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }

        public virtual ICollection<ItemPedido> ItensPedido { get; set; }


        public virtual Usuario Usuario { get; set; }

        public override void Validacao()
        {

            LimparMensagemValidacao();

            if (!ItensPedido.Any())
            {
                AdicionarMensagemValidacao("Item de pedido não pode ficar vazio.");
            }

            if (string.IsNullOrEmpty(Cep))
            {
                AdicionarMensagemValidacao("Cep deve estra preenchido");
            }

            if (FormaPagamentoId == 0)
            {
                AdicionarMensagemValidacao("Não foi informado a forma de pagamento.");
            }
        }
    }
}
