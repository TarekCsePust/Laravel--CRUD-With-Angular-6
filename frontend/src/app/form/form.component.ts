import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  API_ENDPOINT = "http://localhost:8000/api";
  movie: Movie={
    name:null,
    description:null,
    genre:null,
    years:null,
    duration:null
  };

  movies: Movie[];
  public name=null;
  id:any;
  editing:boolean = false;
  constructor(private movieService:MoviesService,private _http:HttpClient,private activate:ActivatedRoute) {
    this.id = this.activate.snapshot.params["id"];
    if(this.id){

      this.editing = true;

      _http.get(this.API_ENDPOINT+"/home/"+this.id).subscribe((data:Movie)=>
      this.movie=data,
      error=> console.log(error)
       );

     
      
    }
    else{
      this.editing = false;
    }
   }

  ngOnInit() {
  }

  saveMovie(){


    if(this.editing){

      this._http.post(this.API_ENDPOINT+"/edit",this.movie).subscribe(data=>console.log(data),
     error=> console.log(error) 
    );

    }else{

      this._http.post(this.API_ENDPOINT+"/save",this.movie).subscribe(data=>console.log(data),
     error=> console.log(error) 
    );

    }

   

    
 

  }

}
