import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';
import { LojaCarrinhoComponent } from '../loja/carrinho/loja.carrinho.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  public carrinho: LojaCarrinhoComponent;

  ngOnInit(): void {
    this.carrinho = new LojaCarrinhoComponent();
  }

  constructor(private router : Router, private usuarioServico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioAutenticado(): boolean {
    return this.usuarioServico.usuarioAutenticado();
  }

  public usuarioAutenticadoPermissaoAdministrador(): boolean {
    return this.usuarioServico.usuarioAutenticadoPermissaoAdministrador();
  }

  public temItemCarrinho() : boolean {
    return this.carrinho.temItemCarrinho();
  }

  sair() {
    this.usuarioServico.limparSessao();
    this.router.navigate(["/"]);
  }

  get usuario(){
    return this.usuarioServico.usuario;
  }

}
