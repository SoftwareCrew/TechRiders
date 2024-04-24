import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'header', component: HeaderComponent },
{ path: 'login', component: LoginComponent },
{ path: 'movies', component: MoviesComponent },
{ path: 'features', component: FeaturesComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
