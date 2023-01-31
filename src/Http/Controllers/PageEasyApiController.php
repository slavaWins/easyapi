<?php

namespace EasyApi\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PageEasyApiController extends Controller
{


    public function index()
    {
        return view('easyapi::page');
    }
}
