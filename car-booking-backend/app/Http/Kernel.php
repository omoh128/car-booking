<?php

namespace App\Http;

use Fruitcake\Cors\HandleCors;

class Kernel extends HttpKernel
{
    protected $middleware = [
        HandleCors::class,
        // Other middleware...
    ];

    // Other class methods and properties...
}
