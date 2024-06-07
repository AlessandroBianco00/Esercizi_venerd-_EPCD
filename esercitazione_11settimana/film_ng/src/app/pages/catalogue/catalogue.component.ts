import { Component } from '@angular/core';
import { iMovie } from '../../Models/movie';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/users.service';
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

  toggleFavourite(movieId:number) {
    const accessData = this.AuthSvc.getAccessData()

    if(!accessData) return
    const userId:number = accessData.user.id
    this.MovieSvc.getFavourite(movieId,userId).subscribe(fav => {
      console.log('fav', fav)
      if (fav.length) {
        this.MovieSvc.deleteFavourite(fav[0].id).subscribe()
      } else {
        console.log('procedo')
        this.MovieSvc.createFavourite(movieId,userId).subscribe()
      }
    })
  }

}
