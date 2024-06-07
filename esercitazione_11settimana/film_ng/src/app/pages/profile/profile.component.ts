import { Component } from '@angular/core';
import { iFavourite } from '../../Models/favourites';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { iMovie } from '../../Models/movie';
import { iUser } from '../../Models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  favouritesArray:iFavourite[] = []
  moviesArray:iMovie[] = []
  currentUser!:iUser

  constructor(
    private MovieSvc:MovieService,
    private AuthSvc:AuthService,
  ) {}

  ngOnInit() {
    const accessData = this.AuthSvc.getAccessData()
    if(!accessData) return
    this.currentUser = accessData.user
    const userId:number = accessData.user.id

    this.MovieSvc.getFavouriteMovies(userId).subscribe(favourites => {
      this.favouritesArray = favourites
    })

    this.favouritesArray.forEach(fav => {
      this.MovieSvc.getMovieById(fav.movieId).subscribe(movie => this.moviesArray.push(movie))
    })

    setTimeout(() => {console.log(this.moviesArray)} ,10000)
  }
}
