import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    MensagemModule, 
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
