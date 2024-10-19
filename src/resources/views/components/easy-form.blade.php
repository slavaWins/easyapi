<form action="{{$route}}"
      onSuccessCall="{{$onSuccess}}"
      class="mprForm">

    <div class="col-12 text-danger errorDiv " style="display: none;">Ошибка</div>
    <div class="col-12 text-success goodDiv " style="display: none;">Данные сохранены</div>

    {{$slot}}


    <div class="col-12  " style="text-align: right;">
        <div class="spinner-border float-end loadingDiv" role="status" style="display: none;">
            <span class="visually-hidden">Loading...</span>
        </div>
        @if($btn)
        <a class="btn btnSumbitForm btn-primary mt-1 {{$btnClass ?? ""}} ">{{$btn}}</a>
        @endif
    </div>
</form>
