<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index()
    {
        // Replace this with your actual data retrieval logic
        $cars = [
            ['id' => 1, 'name' => 'Toyota', 'model' => 'Corolla', 'price_per_day' => 50],
            ['id' => 2, 'name' => 'Honda', 'model' => 'Civic', 'price_per_day' => 45],
        ];

        return response()->json(['data' => $cars]);
    }
}

