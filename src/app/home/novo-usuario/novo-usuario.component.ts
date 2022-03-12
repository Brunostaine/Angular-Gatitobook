import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service'; // não esta sendo usado por enquanto, fiz uma gambiarra para o código voltar. No app.modules adicionei o serviço NovoUsuarioService e importei ele tirando o erro provisóriamente



@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private novoUsuarioService: NovoUsuarioService, // Não apagar
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    })
  }


  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;// Ficar de olho aqui
    console.log(novoUsuario)
  }
}
