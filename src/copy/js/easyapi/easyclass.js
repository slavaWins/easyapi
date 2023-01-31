var EasyClass = {};

EasyClass.New = function () {
    var self = {};


    self.Init = function () {

    }


    self.ElementsInit = function (selector, callback) {
        $(selector).each(function (e) {

            callback( $(this));
        });
    }

    $(document).ready(function () {
        self.Init();
    });

    return self;
}


window.EasyClass = EasyClass;
