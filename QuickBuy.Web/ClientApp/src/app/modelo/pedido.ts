import { ItemPedido } from "./itemPedido";

export class Pedido {

  constructor() {
    this.itensPedido = [];
  }

  public id: number;
  public dataPedido: Date;
  public usuarioId: number;
  public dataPrevisaoEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public enderecoCompleto: string;
  public numeroEndereco: string;
  public formaPagamentoId: number;
  public itensPedido: ItemPedido[];

}
