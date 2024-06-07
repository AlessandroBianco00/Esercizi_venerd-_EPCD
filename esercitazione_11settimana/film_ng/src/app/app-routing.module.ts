import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {
  path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  title: 'MovieBlog'
  },
  {
  path: 'catalogue', loadChildren: () => import('./pages/catalogue/catalogue.module').then(m => m.CatalogueModule),
  canActivate:[AuthGuard],
  canActivateChild: [AuthGuard],
  title: 'Catalogue'
  },
  {
  path: 'community', loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityModule),
  canActivate:[AuthGuard],
  canActivateChild: [AuthGuard],
  title: 'Community'
  },
  {
  path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  canActivate:[AuthGuard],
  canActivateChild: [AuthGuard],
  title: 'Profile'
  },
  {
  path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  canActivate:[GuestGuard],
  canActivateChild: [GuestGuard],
  title: 'Accedi'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
