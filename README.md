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

 В роутере routes/web.php удалить:
 добавить
 ```
    \EasyApi\Library\EasyApiRoute::routes();
 ```

Выполнить миграцию
 ```
    php artisan migrate 
 ``` 
