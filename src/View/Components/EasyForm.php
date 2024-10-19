<?php


namespace EasyApi\View\Components;

use Illuminate\View\Component;

class EasyForm extends Component
{

    public $route = "/";
    public $btn = null;
    public $onSuccess;
    public $btnClass = null;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($route = null, $btn = null, $onSuccess = null, $btnClass =null)
    {

        $this->route = $route;
        $this->btn = $btn;
        $this->onSuccess = $onSuccess;
        $this->btnClass = $btnClass;
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
