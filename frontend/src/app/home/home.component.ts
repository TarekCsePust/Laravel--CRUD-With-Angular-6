import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = "http://localhost:8000/api";
  movies: Movie[];
  public name=null;

  constructor(private movieService:MoviesService,private _http:HttpClient,private route:Router) { 
    
   /* _http.get(this.API_ENDPOINT+"/home").subscribe(data=> this.name = data["data"],
      error=> console.log(error)
    );*/

    _http.get(this.API_ENDPOINT+"/home").subscribe((data:Movie[])=>
      this.movies=data["data"],
      error=> console.log(error)
    );
  }

  ngOnInit() {
  }

  delete(movie:Movie){

    this._http.post(this.API_ENDPOINT+"/delete",movie).subscribe(data=>console.log(data),
      error=> console.log(error)
    );
    this.route.navigateByUrl('');
  }

}
