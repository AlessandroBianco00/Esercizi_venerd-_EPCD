import { Component } from '@angular/core';
import { iMovie } from '../../Models/movie';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {

  movieArray:iMovie[] = []

  constructor(
    private MovieSvc:MovieService,
    private AuthSvc:AuthService,
  ) {}

  ngOnInit() {
    this.MovieSvc.getAllMovies().subscribe(movies => {
      this.movieArray = movies
    })
  }

}
