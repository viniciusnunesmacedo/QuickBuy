import { Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "pesauisa-produto",
  templateUrl: "pesquisa.produto.component.html",
  styleUrls: ["pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
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
    sessionStorage.setItem("produtoSessao", "");
    this.router.navigate(['/produto']);
  }

  public excluirProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente excluir este produto ?");
    if (retorno) {
      this.produtoServico.excluir(produto).subscribe(
        produtos => {
          this.produtos = produtos;
        },
        err => {
          console.log(err.errors);
        });
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem("produtoSessao", JSON.stringify(produto));
    this.router.navigate(['/produto']);
  }
}
