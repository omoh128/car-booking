<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Car;

class CarSeeder extends Seeder
{
    public function run()
    {
        // Clear the cars table (optional)
        Car::truncate();

        // Insert sample cars without the 'image' column
        Car::create([
            'name' => 'Toyota Camry',
            'model' => '2023',
            'price_per_day' => 50.00,
            'is_available' => true,
        ]);

        Car::create([
            'name' => 'Honda Civic',
            'model' => '2022',
            'price_per_day' => 45.00,
            'is_available' => true,
        ]);

        Car::create([
            'name' => 'Ford Mustang',
            'model' => '2021',
            'price_per_day' => 80.00,
            'is_available' => false,
        ]);

        Car::create([
            'name' => 'Tesla Model S',
            'model' => '2023',
            'price_per_day' => 120.00,
            'is_available' => true,
        ]);
    }
}
