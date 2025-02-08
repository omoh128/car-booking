<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    protected $model = Car::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'model' => $this->faker->year,
            'price_per_day' => $this->faker->randomFloat(2, 20, 100),
        ];
    }
}
