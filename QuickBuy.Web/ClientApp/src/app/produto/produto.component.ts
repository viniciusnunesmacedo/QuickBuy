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
  public produtoCadastrado: boolean;
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
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

          console.log(produtoJson);
        },
        err => {

          this.ativarSpinner = false;

          console.log(err.error);

          this.mensagem = err.error;
        });
  }

}
