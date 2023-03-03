var EasyApi = {};

/**
 * Вызывать ГЕТ юрил а потом обновить текущую страницу
 */
EasyApi.CallGetAndUpdatePage = function (url) {

    $.get(url, function (r) {
        EasyApi.UpdatePage();
    });
    return EasyApi;
}

EasyApi.DownloadHtmlContentInSelecorGet = function (selector, url) {
    $.get(url, function (r) {
        $(selector).html(r);
    });
}

EasyApi.UpdatePage = function (url = "") {
    $('#app').css("transition", 'opacity 0.3s');
    $('#app').css("opacity", '0.4');

    if ($('.modal:visible').length > 0) {
        $('.modal:visible').modal('hide');
        //    $('.modal-backdrop').remove();
    }


    if (url != "") {
        window.history.pushState("data", "Title", url);
    }

    $.get(url, function (r) {

        var srf = r.split('<meta name="csrf-token" content="')[1];
        var srf = srf.split('"')[0];
        // console.log(srf);
        $('[name="csrf-token"]').attr('content', srf);
        $('[name="_token"]').val(srf);

        r = r.split("<!-- easycontent.start -->")[1];
        r = r.split("<!-- easycontent.end -->")[0];

        $('#app').html(r);
        $('#app').css("opacity", '1');
    });
    return EasyApi;
}


EasyApi.Post = function (url, date, callback, callbackError) {
    var self = {};
    self.alertError = null;


    self.request = function () {
        if (self.alertError) self.alertError.hide();
        date._token = $('meta[name="csrf-token"]').attr('content');


        $.post(url, date, function (response) {
            var error = null;
            var errorCode = 0;
            if (response['error']) {
                if (self.alertError) {
                    self.alertError.show();
                    self.alertError.html(response.message);
                }
                console.log(url + " ERROR: " + response.message);
                error = response.message;
                errorCode = response.errorCode ?? 0;
            } else {
                if (self.alertError) self.alertError.hide();
            }
            callback(response, error, errorCode);
        }).fail(function (info) {
            if (info.responseJSON) {
                response = info.responseJSON;
                console.log(url + " FAIL ERROR: " + response.message);
                error = response.message;
                callback(info.responseJSON, error);
                if (self.alertError) {
                    self.alertError.show();
                    self.alertError.html(error);
                }
            } else {
                callback(null, "Ошибка сервера...");
                if (self.alertError) {
                    self.alertError.show();
                    self.alertError.html("Ошибка сервера...");
                }
            }
        });
    }

    setTimeout(self.request, 1);

    self.ErrorToAlert = function (e) {
        self.alertError = $(e);
    };
    return self;
}


window.EasyApi = EasyApi;

