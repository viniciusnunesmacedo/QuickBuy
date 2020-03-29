import { Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";

@Component({
  selector: "loja-app-carrinho",
  templateUrl: "loja.carrinho.component.html",
  styleUrls: ["loja.carrinho.component.css"]
})
export class LojaCarrinhoComponent implements OnInit {

  public produtos: Produto[] = [];

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() {

  }

  public adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

    if (!produtoLocalStorage) {
      this.produtos.push(produto);
    } else {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
    }

    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocalStorage) {
      return JSON.parse(produtoLocalStorage);
    }
    return this.produtos;
  }

  public excluir(produto: Produto) {

    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocalStorage) {

      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));

    }
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
  }

  public temItemCarrinho(): boolean {
    var items = this.obterProdutos();
    return (items.length > 0);

  }

  public limparCarrinho() {
    localStorage.setItem("produtoLocalStorage", "");
  }

}
