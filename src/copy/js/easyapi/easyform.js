var MrpForm = {};


MrpForm.Init = function () {

    $('.mprForm').each(function (index) {
        MrpForm.New($(this));
    });

}

MrpForm.forms = {};


MrpForm.New = function (e) {

    if (MrpForm.forms[e]){
        //return MrpForm.forms[e];
    }

    var self = {};


    $(e).on("submit", function () {
        self.Send();
        return false;
    });

    $(e).find(".btnSumbitForm").on("click", function () {
        self.Send();
    });

    self.route = e.attr("action");
    self.btnSumbitForm = e.find(".btnSumbitForm");
    self.loadingDiv = e.find(".loadingDiv");
    self.errorDiv = e.find(".errorDiv");
    self.goodDiv = e.find(".goodDiv");
    self.isLoading = false;

    self.GetData = function () {
        var data = {};
        var formData = e.serializeArray();

        for (var i = 0; i < formData.length; i++) {
            var key = formData[i].name;
            var isArray = key.indexOf("[]") > 0;
            key = key.replace('[]', '');

            if (isArray) {
                if (!data.hasOwnProperty(key)) {
                    data[key] = [];
                }
                data[key].push(formData[i].value)

            } else {
                data[key] = formData[i].value;
            }


        }
        console.log(data);
        return data;
    }

    self.OnSended = function () {
        e.css("opacity", "1");
        self.isLoading = false;
        self.loadingDiv.hide();
        self.btnSumbitForm.show();
    }

    self.Send = function () {
        if (self.isLoading) return;
        e.css("opacity", "0.4");
        e.css("transition", "0.4s");
        self.loadingDiv.show();
        self.btnSumbitForm.hide();
        self.errorDiv.hide();
        self.goodDiv.hide();
        var data = self.GetData();

        EasyApi.Post(self.route, data, function (response, error) {
            self.OnSended();
            if (error) {
                self.errorDiv.show();
                self.errorDiv.html(error);
                return;
            }

            var onSuccessCall = e.attr('onSuccessCall');
            if (onSuccessCall) {
                if (onSuccessCall.trim().length > 1) {
                    eval(onSuccessCall)();
                }
            }

            //console.log(response.response);
            self.goodDiv.show();
            if (typeof response.response === 'string') {
                self.goodDiv.html(response.response);
            }


        });
    }


    MrpForm.forms[e] = self;
    return self;
}


$(document).ready(function () {
    MrpForm.Init();
});

window.MrpForm = MrpForm;
