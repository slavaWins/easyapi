<?php

namespace EasyApi\Providers;

use EasyApi\View\Components\EasyForm;
use Illuminate\Support\ServiceProvider;
use EasyApi\Console\Commands\ExampleCommand;
use EasyApi\Console\Commands\MakePackage;

class EasyApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {


    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        $this->loadViewComponentsAs('', [
            EasyForm::class,
        ]);

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'easyapi');



        $js_path = __DIR__ . '/../copy/js';
        if (file_exists($js_path)) {
            $this->publishes([
                $js_path => public_path('js'),
            ], 'public');
        }

    }
}
