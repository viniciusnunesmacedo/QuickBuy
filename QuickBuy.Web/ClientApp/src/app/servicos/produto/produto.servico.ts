import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../modelo/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoServico implements OnInit {

  private _baseURL: string;
  public produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseURL = baseUrl;
  }

  ngOnInit(): void {
    this.produtos = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public obterProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this._baseURL + "api/produto");
  }

  public obterProduto(produtoId: number): Observable<Produto> {

    return this.http.get<Produto>(this._baseURL + "api/produto/obter");
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<string> {

    const formData: FormData = new FormData();

    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);

    return this.http.post<string>(this._baseURL + "api/produto/enviarArquivo", formData);
  }

  public cadastrar(produto: Produto): Observable<Produto> {

    console.log(JSON.stringify(produto));

    return this.http.post<Produto>(this._baseURL + "api/produto", JSON.stringify(produto), { headers: this.headers });
  }

  public excluir(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this._baseURL + "api/produto/excluir", JSON.stringify(produto), { headers: this.headers });
  }
}
