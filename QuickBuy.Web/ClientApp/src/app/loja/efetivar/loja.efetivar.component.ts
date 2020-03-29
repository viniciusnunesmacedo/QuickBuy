import { Component, OnInit } from "@angular/core"
import { LojaCarrinhoComponent } from "../carrinho/loja.carrinho.component";
import { Produto } from "../../modelo/produto";
import { Pedido } from "../../modelo/pedido";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { ItemPedido } from "../../modelo/itemPedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { Router } from "@angular/router";

@Component({
  selector: "loja-app-efetivar",
  templateUrl: "loja.efetivar.component.html",
  styleUrls: ["loja.efetivar.component.css"]
})
export class LojaEfetivarComponent implements OnInit {

  public carrinho: LojaCarrinhoComponent;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {
    this.carrinho = new LojaCarrinhoComponent();
    this.produtos = this.carrinho.obterProdutos();
    this.atualizarTotal();
  }

  constructor(private usuarioServico: UsuarioServico,
    private pedidoServico: PedidoServico,
    private router: Router) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoUnitario) {
      produto.precoUnitario = produto.preco;
    }

    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoUnitario * quantidade;
    this.carrinho.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public excluir(produto: Produto) {
    this.carrinho.excluir(produto);
    this.produtos = this.carrinho.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarTotal() {

    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarCompra() {

    let pedido = this.criarPedido();

    this.pedidoServico.efetivarCompra(pedido).subscribe(
      pedidoId => {
        sessionStorage.setItem("pedidoId", pedidoId.toString());
        this.produtos = [];
        this.carrinho.limparCarrinho();
        this.router.navigate(["/loja-compra-finalizada"]);
      },
      err => {
        console.log(err.error);
      }
    );

  }

  public criarPedido(): Pedido {

    let pedido = new Pedido();

    pedido.usuarioId = this.usuarioServico.usuario.id;

    pedido.cep = "07904-060";
    pedido.enderecoCompleto = "Rua Joao";
    pedido.numeroEndereco = "123";
    pedido.cidade = "São Paulo";
    pedido.estado = "sp";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;

    this.produtos = this.carrinho.obterProdutos();

    for (let p of this.produtos) {

      let itemPedido = new ItemPedido();

      itemPedido.produtoId = p.id;

      if (!p.quantidade) {
        p.quantidade = 1;
      }

      itemPedido.quantidade = p.quantidade;

      pedido.itensPedido.push(itemPedido);

    }

    return pedido;
  }

}
