<?php


namespace EasyApi\View\Components;

use Illuminate\View\Component;

class EasyForm extends Component
{

    public $route = "/";
    public $btn = "Отправить";

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($route = null, $btn = "Отправить")
    {

        $this->route = $route;
        $this->btn = $btn;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('easyapi::components.easy-form');
    }
}
