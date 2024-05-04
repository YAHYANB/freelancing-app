<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GigController;
use App\Http\Controllers\LanguagesController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::put('/user', [UserController::class, 'update']);
    Route::get('/user', [UserController::class, 'index']);
});

Route::prefix('languages')->group(function () {
    Route::post('/', [LanguagesController::class, 'store']);
    Route::put('/{language}', [LanguagesController::class, 'update']);
    Route::delete('/{language}', [LanguagesController::class, 'destroy']);
});

Route::prefix('skills')->group(function () {
    Route::post('/', [SkillsController::class, 'store']);
    Route::put('/{skill}', [SkillsController::class, 'update']);
    Route::delete('/{skill}', [SkillsController::class, 'destroy']);
});

Route::post('/login', [AuthController::class, 'Login']);
Route::post('/register', [AuthController::class, 'Register']);
Route::post('/logout', [AuthController::class, 'Logout'])->middleware('auth:sanctum');

Route::get('/gigs', [GigController::class, 'index']);
Route::get('/gig/show/{id}', [GigController::class, 'show']);
Route::post('/gigs/add', [GigController::class, 'store'])->middleware('auth:sanctum');
Route::post('/gigs/update/{id}', [GigController::class, 'update'])->middleware('auth:sanctum');
Route::post('/gigs/delete/{id}', [GigController::class, 'destroy'])->middleware('auth:sanctum');