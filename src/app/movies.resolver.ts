import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { MoviesService } from './services/movies.service';

export const moviesResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const moviesService = inject(MoviesService);
  const id = route.paramMap.get('id');
  return moviesService.getMovie(+id)
};


// Implement search each movie when click in a card