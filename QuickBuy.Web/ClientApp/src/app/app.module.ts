import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './usuario/login/login.component'
import { ProdutoComponent } from './produto/produto.component'
import { GuardaRotas } from './autorizacao/guarda.rotas';

import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { ProdutoServico } from './servicos/produto/produto.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { PesquisaProdutoComponent } from './produto/pesquisa/pesquisa.produto.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { LojaProdutoComponent } from './loja/produto/loja.produto.component';
import { LojaEfetivarComponent } from './loja/efetivar/loja.efetivar.component';
import { LojaCarrinhoComponent } from './loja/carrinho/loja.carrinho.component';
import { PedidoServico } from './servicos/pedido/pedido.servico';
import { LojaCompraFinalizadoComponent } from './loja/finalizado/loja.compra.finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    LoginComponent,
    NavMenuComponent,
    ProdutoComponent,
    PesquisaProdutoComponent,
    LojaPesquisaComponent,
    LojaProdutoComponent,
    LojaEfetivarComponent,
    LojaCarrinhoComponent,
    LojaCompraFinalizadoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
      { path: 'loja-produto', component: LojaProdutoComponent },
      { path: 'loja-efetivar', component: LojaEfetivarComponent, canActivate: [GuardaRotas] },
      { path: 'loja-carrinho', component: LojaCarrinhoComponent },
      { path: 'loja-compra-finalizada', component: LojaCompraFinalizadoComponent },
      { path: 'pesquisar-produtos', component: PesquisaProdutoComponent, canActivate: [GuardaRotas] },
      { path: 'entrar', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroUsuarioComponent }

    ])
  ],
  providers: [UsuarioServico, ProdutoServico, PedidoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }

