<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{

        use HasFactory;

        protected $fillable = [
            'name',
            'model',
            'price_per_day',
            'image',
            'is_available',
        ];

        // A car can have many bookings
        public function bookings()
        {
            return $this->hasMany(Booking::class);
        }
    
}
