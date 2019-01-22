<?php

use Illuminate\Http\Request;

Route::group([

    'middleware' => 'api',
  

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('home', 'homeController@index');
    Route::get('home/{id}', 'homeController@detail');
    Route::post('save', 'homeController@save');
    Route::post('edit', 'homeController@edit');
    Route::post('delete', 'homeController@delete');


});