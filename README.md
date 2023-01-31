<p align="center">
<img src="info/logo.jpg">
</p>
 
## EasyApi
Кароч изи пакет 
   

## Установка из composer

```  
composer require slavawins/easyapi
```

 Опубликовать js файлы, вью и миграции необходимые для работы пакета.
Вызывать команду:
```
php artisan vendor:publish --provider="EasyApi\Providers\EasyApiServiceProvider"
``` 

 
Подключить
 ```

    <script src="{{ asset('js/easyapi/easyclass.js') }}"></script>
    <script src="{{ asset('js/easyapi/easyapi.js') }}"></script>
    <script src="{{ asset('js/easyapi/easyform.js') }}" defer></script>
 ``` 
