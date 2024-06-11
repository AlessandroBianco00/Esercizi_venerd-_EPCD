import { Component, Input } from '@angular/core';
import { iMovie } from '../../../Models/movie';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { AuthService } from '../../../services/auth.service';
import { iUser } from '../../../Models/user';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrl: './single-film.component.scss'
})
export class SingleFilmComponent {

  @Input() movie!:iMovie

  currentUser!:iUser
  liked:boolean = false

  constructor(
    protected router:Router,
    private MovieSvc:MovieService,
    private AuthSvc:AuthService,
  ){}

  ngOnInit() {
    const accessData = this.AuthSvc.getAccessData()
    if(!accessData) return
    this.currentUser = accessData.user
    const userId:number = accessData.user.id

    this.MovieSvc.getFavouriteMovies(userId).subscribe(favourites => {
      favourites.forEach(fav => {
        if (fav.movieId === this.movie.id) this.liked = true
      })
    })

  }

  toggleFavourite(movieId:number) {
    const accessData = this.AuthSvc.getAccessData()

    this.liked = !this.liked

    if(!accessData) return
    const userId:number = accessData.user.id
    this.MovieSvc.getFavourite(movieId,userId).subscribe(fav => {
      if (fav.length) {
        this.MovieSvc.deleteFavourite(fav[0].id).subscribe()
      } else {
        this.MovieSvc.createFavourite(movieId,userId).subscribe()
      }
    })
  }
}
