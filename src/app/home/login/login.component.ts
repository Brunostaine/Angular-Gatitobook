import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  login():any {
    this.authService
    .autenticar(this.usuario, this.senha)
    .subscribe({
      next: () => this.router.navigate(['animais']),
      error: (error: any) => {
      alert("Usuário ou senha inválido.");
      console.error(error);
    }
  })
  }
}

// this.authService.autenticar(this.usuario, this.senha).subscribe(
//   () => {
//   console.log("Autenticado com sucesso")
// }, 
// (error) => {
//   alert("Usuário ou senha invalido");
//   console.log(error);
// }
// );