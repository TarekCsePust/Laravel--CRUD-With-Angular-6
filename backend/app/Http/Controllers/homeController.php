<?php

namespace App\Http\Controllers;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Movie;

class homeController extends Controller
{
    public function index(){
        $movies = Movie::all();
       // return $movies;
        return response()->json(['data'=>$movies],Response::HTTP_CREATED);
    }


    public function detail($id){

        $movie = Movie::whereId($id)->first();
        return $movie;

    }

    public function save(Request $request){
        $movie = new Movie;
        $movie->name =  $request->name;
        $movie->description =  $request->description;
        $movie->genre =  $request->genre;
        $movie->years =  $request->years;
        $movie->duration =  $request->duration;
        $movie->save();
        return response()->json(['data'=>"Movie successfully added."],Response::HTTP_CREATED);
      
    }

    public function edit(Request $request){
        $movie = Movie::whereId($request->id)->first();
        $movie->name =  $request->name;
        $movie->description =  $request->description;
        $movie->genre =  $request->genre;
        $movie->years =  $request->years;
        $movie->duration =  $request->duration;
        $movie->save();
        return response()->json(['data'=>"Movie successfully edited."],Response::HTTP_CREATED);
    }

    public function delete(Request $request){
        $movie = Movie::whereId($request->id)->first();
        $movie->delete();
            
        return response()->json(['data'=>"Movie successfully deleted."],Response::HTTP_CREATED);
    }
}
