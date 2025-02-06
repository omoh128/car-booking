<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import the trait

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'car_id',
        'start_date',
        'end_date',
        'total_price',
        'status',
    ];

    // A booking belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Note: The following relationship might need review,
    // as using belongsTo(Car::class) inside the Car model can be recursive.
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
