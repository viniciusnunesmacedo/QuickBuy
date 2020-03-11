namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validacao()
        {
            if (ProdutoId == 0)
            {
                AdicionarMensagemValidacao("Não foi identificado qual a referência do produto.");
            }

            if (Quantidade == 0)
            {
                AdicionarMensagemValidacao("Quantidade não foi informada");
            }
        }
    }
}
