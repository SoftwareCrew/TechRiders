import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description of Movie 1.',
      poster: 'https://via.placeholder.com/150',
      releaseDate: '2024-04-24'
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description of Movie 2.',
      poster: 'https://via.placeholder.com/150',
      releaseDate: '2024-04-25'
    }
    // Add more movies as needed
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
}
