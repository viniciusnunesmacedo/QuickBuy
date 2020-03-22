import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    LoginComponent,
    NavMenuComponent,
    ProdutoComponent,
    PesquisaProdutoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
      { path: 'pesquisar-produtos', component: PesquisaProdutoComponent },
      { path: 'entrar', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroUsuarioComponent }
    ])
  ],
  providers: [UsuarioServico, ProdutoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }
