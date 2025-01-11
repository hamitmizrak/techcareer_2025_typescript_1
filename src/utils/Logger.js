"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/*
Logger typescript sınıfı oluşturuldu ve loglama işlemleri bu sınıf üzerinden yapılacaktır.
Loglama işlemleri için 4 farklı (seviye) metot oluşturuldu.
Logger sınıfı bir static(statik) sınıftır ve bu sınıf üzerinden metotlar çağrılabilir.

Statik Yapı: Logger sınıfındaki tüm fonksiyonlar statik olarak tanımlanmıştır.
Bu sınıf üzerinden nesne oluşturulmadan(instance) doğrudan metotlar çağrılabilir.
Bundan dolayı performansını arttırır ve daha az bellek tüketir.
*/
var Logger = /** @class */ (function () {
    function Logger() {
    }
    // LOG
    Logger.log = function (message) {
        message = "[LOG]: ".concat(message);
        console.log(message);
    };
    // ERROR
    Logger.error = function (message) {
        message = "[ERROR]: ".concat(message);
        console.log(message);
    };
    // WARN
    Logger.warn = function (message) {
        message = "[WARN]: ".concat(message);
        console.log(message);
    };
    // DEBUG
    Logger.debug = function (message) {
        message = "[DEBUG]: ".concat(message);
        console.log(message);
    };
    return Logger;
}()); // end of class Logger
exports.Logger = Logger;
