import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {

  private baseURL: string;
  private _usuario: Usuario;

  get usuario(): Usuario {
    let usuarioJson = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuarioJson);
    return this._usuario;
  }

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public usuarioAutenticado(): boolean {
    return this._usuario != null &&
      this._usuario.email != "" &&
      this._usuario.senha != "";
  }

  public usuarioAutenticadoPermissaoAdministrador(): boolean {
    return this.usuarioAutenticado() && this.usuario.eAdministrador;
  }

  public limparSessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarusuario", JSON.stringify(usuario), { headers: this.headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.baseURL + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
  }

}
