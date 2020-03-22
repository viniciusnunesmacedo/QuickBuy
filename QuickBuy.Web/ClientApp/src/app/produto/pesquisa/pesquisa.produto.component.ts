import { Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "pesauisa-produto",
  templateUrl: "pesquisa.produto.component.html",
  styleUrls: ["pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterProdutos().subscribe(
      produtos => {
        console.log(produtos);

        this.produtos = produtos;

      },
      err => {
        console.log(err.error);
      });
  }

  public adicionarProduto() {

  }

}
