<?php

namespace EasyApi\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int amount
 * @property string ind
 * @property string date_day
 *
 **/
class EasyApi extends Model
{
    use HasFactory;

    public $timestamps = false;
}
