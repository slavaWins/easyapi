<?php

    namespace App\Http\Controllers\EasyApi;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Validator;

    class EasyApiController extends Controller
    {


        public function index() {


            return view('easyapi.example');

        }
    }
