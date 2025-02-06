<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Call the CarSeeder
        $this->call([
            CarSeeder::class,
            UserSeeder::class, 
        ]);

        // You can add more seeders here if needed
        // Example: $this->call([UserSeeder::class]);
    }
}
