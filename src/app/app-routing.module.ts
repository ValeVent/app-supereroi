import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaggiComponent } from './pages/lista-personaggi/lista-personaggi.component';
import { FormPersonaggiComponent } from './pages/form-personaggi/form-personaggi.component';
import { DettaglioPersonaggiComponent } from './pages/dettaglio-personaggi/dettaglio-personaggi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: ListaPersonaggiComponent
  },
  {
    path: 'form',
    component: FormPersonaggiComponent
  },
  {
    path: ':id',
    component: DettaglioPersonaggiComponent
  },
  {
    path: '**',
    redirectTo: 'heroes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
