<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    public function run()
    {
        // Create 10 fake cars using the CarFactory
        Car::factory()->count(10)->create();
    }
}
