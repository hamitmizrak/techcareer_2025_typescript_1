"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
// User Eklendi
var User_1 = require("./User");
// Export Admin
// Extends: Kalıtımlama
/*
extends User: Bu dosyada bir ADmin sınıfı tanımlanmış ve bu sınıf User sınıfından kalıtım almıştır.
Yani Admin sınıfı User sınıfının özelliklerini ve metotlar kullanabilir.
aynı zamanda Admin sınıfı User sınıfının metotlarını override edebilir.
aynı zamanda Admin sınıfı User sınıfının metotlarını çağırabilir.
aynı zamanda Admin sınıfı User sınıfının metotlarını gizleyebilir.
aynı zamanda Admin sınıfı User sınıfının metotlarını genişletebilir yani özelleştirebiliriz.

Katımı Avantajları
1-) Kodun tekrar kullanılabilirliğini arttırır.
2-) Kodun okunabilirliğini arttırır.
3-) Kodun bakımını kolaylaştırır.
4-) Kodun genişletilmesini sağlar.
5-) Daha az kod yazmamızı sağlar.
*/
/*
Constructor: Bir sınıfın yapıcı metodu, sınıf örneklerinin oluşturulmasını sağlar.
Yapıcı metodun adı her zaman constructor yazmalıyız.
Yapıcı metodun parametreleri olabilir.
Yapıcı metotlarda sınıfın örneklemesini oluşturduğumuzda default değerlerini yazmak içindir
Bir sınıf sadece bir yapıcı metoda sahip olabilir.
Bir sınıf birden fazla yapıcı metoda sahip olamaz.
Bir sınıfın yapıcı metodu olmasa bile, TypeScript otomatik olarak bir yapıcı metod oluşturur.
*/
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    // Constuctor
    function Admin(username, password) {
        // Super: Kalıtımla gelen class özellikleri constructor içinde kullanmak için
        return _super.call(this, username, password) || this;
    } //end of constructor
    // Role özelleştirimesi için Override yaptık.
    // Role Normalde User'dı, Admin olarak değiştirildi
    Admin.prototype.getRole = function () {
        //return "Admin";
        return UserRole.Admin;
    };
    // Admin Bütün kullanıcları Listele
    Admin.prototype.viewAllUser = function () {
        return "Admin users are listed";
    };
    // Authorization: Yetkilendirme
    Admin.prototype.checkAccess = function (user) {
        if (user.getRole() === UserRole.Admin) {
            console.log("Admin erişimi verildi");
            return true;
        }
        else {
            console.log("Admin erişimi verilmedi");
            return false;
        }
    }; //end checkAccess
    return Admin;
}(User_1.User)); // end class Admin
exports.Admin = Admin;
