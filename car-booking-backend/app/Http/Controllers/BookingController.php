<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    // Get all bookings
    public function index()
    {
        $bookings = Booking::with(['user', 'car'])->get();
        return response()->json($bookings);
    }

    // Get a single booking by ID
    public function show($id)
    {
        $booking = Booking::with(['user', 'car'])->find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        return response()->json($booking);
    }

    // Create a new booking
    public function store(Request $request)
    {
        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        // Calculate total price
        $car = Car::find($request->car_id);
        $days = (strtotime($request->end_date) - strtotime($request->start_date)) / (60 * 60 * 24);
        $totalPrice = $car->price_per_day * $days;

        // Create the booking
        $booking = Booking::create([
            'user_id' => Auth::id(), // Assuming the user is authenticated
            'car_id' => $request->car_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'total_price' => $totalPrice,
            'status' => 'pending', // Default status
        ]);

        return response()->json($booking, 201);
    }

    // Update an existing booking
    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $request->validate([
            'start_date' => 'sometimes|date',
            'end_date' => 'sometimes|date|after:start_date',
            'status' => 'sometimes|in:pending,approved,canceled',
        ]);

        // Recalculate total price if dates are updated
        if ($request->has('start_date') || $request->has('end_date')) {
            $startDate = $request->start_date ?? $booking->start_date;
            $endDate = $request->end_date ?? $booking->end_date;
            $days = (strtotime($endDate) - strtotime($startDate)) / (60 * 60 * 24);
            $totalPrice = $booking->car->price_per_day * $days;
            $booking->total_price = $totalPrice;
        }

        $booking->update($request->all());
        return response()->json($booking);
    }

    // Delete a booking
    public function destroy($id)
    {
        $booking = Booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $booking->delete();
        return response()->json(['message' => 'Booking deleted']);
    }
}
