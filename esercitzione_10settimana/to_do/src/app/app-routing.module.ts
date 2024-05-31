import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { UsersComponent } from './pages/users/users.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Home',
    pathMatch: 'full'
  },
  {
    path:'completed',
    component: CompletedComponent,
    title:'Completed'
  },
  {
    path:'uncompleted',
    component: UncompletedComponent,
    title:'Uncompleted'
  },
  {
    path:'users',
    component: UsersComponent,
    title:'Fiat'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
