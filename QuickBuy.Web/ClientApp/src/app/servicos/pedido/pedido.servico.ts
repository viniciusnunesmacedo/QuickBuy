import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pedido } from "../../modelo/pedido";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PedidoServico {

  private _baseURL: string;

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseURL = baseUrl;
  }

  public efetivarCompra(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this._baseURL + "api/pedido", JSON.stringify(pedido), { headers: this.headers });
  }

}
