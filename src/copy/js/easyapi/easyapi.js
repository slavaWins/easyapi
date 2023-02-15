var EasyApi = {};

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
            if (info.responseJSON){
                response = info.responseJSON;
                console.log(url + " FAIL ERROR: " + response.message);
                error = response.message;
                callback(info.responseJSON, error);
                if (self.alertError) {
                    self.alertError.show();
                    self.alertError.html(error);
                }
            }else{
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

