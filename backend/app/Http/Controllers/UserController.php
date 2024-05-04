<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function index(Request $request)
    {
        try {
            $user = $request->user();
            $user->load('skills', 'languages');
            return response()->json($user);
        } catch (\Exception $err) {
            return response()->json(['error' => 'error occured while fetching user', $err->getMessage()], 500);
        }
    }

    /**
     * Show the form for creating a new resource.

     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'description' => ['max:500'],
            'profileImg' => ['image','mimes:jpeg,png,jpg,gif'],
            'displayName' => ['max:15'],
            'bio' => ['max:100'],
            'url' => ['nullable', 'url']
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = $request->user();
        $dataToUpdate = [];

        if ($request->has('profileImg')) {
            return response()->json(['messag' => $request->profileImg]);
            // $imageName = uniqid().'.'.$request->profileImg->extension();  
            // $request->profileImg->move(public_path('images/'), $imageName);
            // $dataToUpdate['profileImg'] = $imageName ;
        }

        if ($request->has('description')) {
            $dataToUpdate['description'] = $request->description;
        }
        
        if ($request->has('displayName')) {
            $dataToUpdate['displayName'] = $request->displayName;
        }

        if ($request->has('bio')) {
            $dataToUpdate['bio'] = $request->bio;
        }

        if ($request->has('url')) {
            $dataToUpdate['url'] = $request->url;
        }

        $user->update($dataToUpdate);
        return response()->json(['user' => $user]);
    }


    public function destroy(User $user)
    {
    }
}