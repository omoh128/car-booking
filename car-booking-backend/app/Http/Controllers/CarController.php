<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    // Get all cars
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars);
    }

    // Get a single car by ID
    public function show($id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }
        return response()->json($car);
    }

    // Create a new car
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'model' => 'required|string',
            'price_per_day' => 'required|numeric',
            'image' => 'nullable|string',
            'is_available' => 'required|boolean',
        ]);

        $car = Car::create($request->all());
        return response()->json($car, 201);
    }

    // Update an existing car
    public function update(Request $request, $id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string',
            'model' => 'sometimes|string',
            'price_per_day' => 'sometimes|numeric',
            'image' => 'nullable|string',
            'is_available' => 'sometimes|boolean',
        ]);

        $car->update($request->all());
        return response()->json($car);
    }

    // Delete a car
    public function destroy($id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }

        $car->delete();
        return response()->json(['message' => 'Car deleted']);
    }
}
