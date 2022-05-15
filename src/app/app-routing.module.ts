import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
  // (:) -> indica que "id" é um atributo, ":id" é um placeholder
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // o método forRoot() define as rotas no nível raiz do aplicativo 
  exports: [RouterModule]
  // exporta para ficar disponivel para todo o aplicativo
})
export class AppRoutingModule { }
