import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";

@Component({
  selector: "produto",
  templateUrl: "produto.component.html",
  styleUrls: ["produto.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public ativarSpinner: boolean;
  public mensagem: string;
  public usuarioCadastrado: boolean;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public salvar() {

    this.ativarSpinner = true;

    this.produtoServico.salvar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        err => {

          this.ativarSpinner = false;

          console.log(err.error);
        });
  }

}
