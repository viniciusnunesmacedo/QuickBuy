import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";
import { Router } from "@angular/router";

@Component({
  selector: "produto",
  templateUrl: "produto.component.html",
  styleUrls: ["produto.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public ativarSpinner: boolean;
  public mensagem: string;
  public produtoCadastrado: boolean;
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem("produtoSessao");
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    } else {
      this.produto = new Produto();
    }
  }

  public selecaoImagem(files: FileList) {

    this.ativarSpinner = true;

    this.arquivoSelecionado = files.item(0);

    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      nomeArquivo => {

        this.produto.nomeArquivo = nomeArquivo;

        this.ativarSpinner = false;
      },
      e => {
        console.log(e.error);
        this.ativarSpinner = false;
      }
    )
  }

  public cadastrar() {

    this.ativarSpinner = true;
    this.produtoCadastrado = false;
    this.mensagem = "";


    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {

          this.ativarSpinner = false;
          this.produtoCadastrado = true;
          this.router.navigate(['/pesquisar-produtos']);

        },
        err => {

          this.ativarSpinner = false;

          console.log(err.error);

          this.mensagem = err.error;
        });
  }

}
