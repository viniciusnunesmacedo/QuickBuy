import { Component, OnInit } from "@angular/core"

@Component({
  templateUrl: "loja.compra.finalizado.component.html"
})
export class LojaCompraFinalizadoComponent implements OnInit {

  public pedidoId: string;

  ngOnInit(): void {
    this.pedidoId = sessionStorage.getItem("pedidoId");
  }

  constructor() {

  }

}
