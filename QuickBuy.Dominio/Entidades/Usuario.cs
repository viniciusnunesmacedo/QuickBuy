﻿using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public bool EAdministrador { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validacao()
        {
            if (string.IsNullOrEmpty(Email))
            {
                AdicionarMensagemValidacao("E-mail não foi informado.");
            }

            if (string.IsNullOrEmpty(Senha))
            {
                AdicionarMensagemValidacao("Senha não foi informada.");
            }
        }
    }
}
