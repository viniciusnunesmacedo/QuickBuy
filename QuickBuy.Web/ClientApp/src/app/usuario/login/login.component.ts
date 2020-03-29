import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router"
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {


  public usuario;
  public returnUrl: string;
  public mensagem: string;

  public ativarSpinner: boolean;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {


  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
  }

  entrar() {

    this.ativarSpinner = true;

    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      usuarioJson => {

        //sessionStorage.setItem("usuario-autenticado", "1");
        this.usuarioServico.usuario = usuarioJson;

        if (this.returnUrl == null) {
          this.router.navigate(['/']);
        }
        else {
          this.router.navigate([this.returnUrl]);
        }

      },
      err => {
        this.ativarSpinner = false;
        console.log(err.error);
        this.mensagem = err.error;
      }
    );

    //if (this.usuario.email == "v@v.com" && this.usuario.senha == "123") {
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //}

  }

}
