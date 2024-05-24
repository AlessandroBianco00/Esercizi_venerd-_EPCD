import { DetailsComponent } from './pages/details/details.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Home',
    pathMatch: 'full'
  },
  {
    path:'audi',
    component: AudiComponent,
    title:'Audi'
  },
  {
    path:'fiat',
    component: FiatComponent,
    title:'Fiat'
  },
  {
    path:'ford',
    component: FordComponent,
    title:'Ford'
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    title:'Dettaglio veicolo'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
