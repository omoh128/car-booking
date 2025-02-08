<?php

namespace App\Http;

use Fruitcake\Cors\HandleCors;

class Kernel extends HttpKernel
{
    protected $middleware = [
        //HandleCors::class,
        // Other middleware...
        \Fruitcake\Cors\HandleCors::class,
    ];

    // Other class methods and properties...
}
