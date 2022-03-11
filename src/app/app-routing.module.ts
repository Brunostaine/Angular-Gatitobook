import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    // Aqui estamos falando que se a tora estiver vazio o usuario sera direcionado para a home
  },
  {
    path: 'home',
    loadChildren: () => import (`./home/home.module`).then((m)=> m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
