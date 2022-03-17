import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NovoUsuarioService } from './home/novo-usuario/novo-usuario.service';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    AutenticacaoModule    
  ],
  providers: [
    NovoUsuarioService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
