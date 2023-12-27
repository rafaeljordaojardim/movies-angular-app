import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-list/movie/movie.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieDetailDirective } from './movie-detail.directive';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesService } from './services/favorites.service';
import { moviesResolver } from './movies.resolver';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { LocalStorageService } from './services/local-storage.service';
import { LoginGuard } from './login.guard';

const appRoutes: Routes = [
  { path : '' , redirectTo : 'login' , pathMatch : 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent, canActivate: [LoginGuard]},
  { path: 'movies/:id', component: MovieDetailComponent, canActivate: [LoginGuard], resolve: { movieSelected: moviesResolver }},
  { path: 'favorites', component: FavoritesComponent, canActivate: [LoginGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MovieListComponent,
    MovieComponent,
    FavoritesComponent,
    MovieDetailDirective,
    MovieDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService, FavoritesService,  LoginService, LocalStorageService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

// seach each movie - resolver
// login na aplicação - implementação de guard
