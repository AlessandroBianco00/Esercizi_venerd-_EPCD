import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovie } from '../Models/movie';
import { iFavourite } from '../Models/favourites';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl:string = 'http://localhost:3000/movies'
  favouritesUrl:string ='http://localhost:3000/favourites'

  constructor(
    private http:HttpClient
  ) { }

  //Metodi per film
  getAllMovies(){
    return this.http.get<iMovie[]>(this.moviesUrl)
  }

  getMovieById(id:number){
    return this.http.get<iMovie>(`${this.moviesUrl}/${id}`)
  }

  //Metodi per favoriti

  getFavouriteMovies(userId:number) {
    return this.http.get<iFavourite[]>(`${this.favouritesUrl}?&userId=${userId}`)
  }

  getFavourite(movieId:number,userId:number) {
    return this.http.get<iFavourite[]>(`${this.favouritesUrl}?movieId=${movieId}&userId=${userId}`)
  }

  createFavourite(movieId:number,userId:number) {
    const newFav:Partial<iFavourite> = {
      movieId: movieId,
      userId: userId
    }
    return this.http.post<iFavourite>(this.favouritesUrl, newFav)
  }

  deleteFavourite(id:number){
    return this.http.delete(`${this.favouritesUrl}/${id}`)
  }

  /*toggleFavourite(movieId:number,userId:number) {
    const searchedFav = this.http.get<iMovie>(`${this.favouritesUrl}?movieId=${movieId}&userId${userId}`)
    if(searchedFav) {
      const newFavourite = {
        userId: userId,
        movieId: movieId
      }
      return this.http.post<iMovie>(this.favouritesUrl, newFavourite)
    } else {
      return this.http.delete(`${this.apiUrl}/${id}`)
    }
  }*/
}
