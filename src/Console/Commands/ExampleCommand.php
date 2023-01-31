<?php

namespace EasyApi\Console\Commands;

use EasyApi\Library\EasyApiHelper;
use EasyApi\Models\EasyApi;
use EasyApi\Models\EasyApiSetting;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ExampleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'easyapi:example';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Заготовка команды easyapi';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    public function handle()
    {

        $this->info("easyapi - Команда выполнена");
    }
}
