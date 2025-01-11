"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// Export: Diğer Classlarda da kullanabilmek için
var User = /** @class */ (function () {
    // constructor: Kurucu Method
    function User(username, password, role) {
        if (role === void 0) { role = UserRole.User; }
        //private readonly role: string = "User"; // Default Value: User
        this.role = UserRole.User; // Default Value: User
        this.lastLogin = null; // en son admin giriş tarihi
        this.id = User.idCounter++; // benzersiz bir ID için(Unique ID)
        this.username = username;
        this.password = password;
        this.role = role;
    } // end of constructor
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Function: Method
    User.prototype.updateLastLogin = function () {
        this.lastLogin = new Date();
    };
    User.prototype.getLastLogin = function () {
        return this.lastLogin;
    };
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Encapsulation: Getter Method
    // ID
    User.prototype.getId = function () {
        return this.id;
    };
    // USERNAME
    User.prototype.getUsername = function () {
        return this.username;
    };
    // PASSWORD
    User.prototype.verifyPassword = function (password) {
        return this.password === password;
    };
    // ROLE ÇAĞIR
    User.prototype.getRole = function () {
        return this.role;
    };
    // ROLE DEĞİŞTİR
    User.prototype.setRoler = function (newRole) {
        if (newRole === UserRole.Admin) {
            this.role = newRole;
        }
    };
    // Yetkilendirme
    User.prototype.specialPage = function () {
        if (UserRole.Admin === this.role) {
            console.log("Admin sayfasına hoşgeldiniz");
        }
        else if (UserRole.Moderator === this.role) {
            console.log("Moderator sayfasına hoşgeldiniz");
        }
    };
    // Remember Me
    User.prototype.loginUser = function (data) {
        console.log("User Logged In".concat(data.username));
        if (data.rememberMe) {
            console.log("Remember Me özelliği ile kullanıcıyı artık tanıyorum");
        }
        else {
            console.log("");
        }
    };
    // Kullanıcı Bilgileri Göster
    User.prototype.displayUserInfo = function () {
        console.log("User Info: User ID: ".concat(this.id, " - username: ").concat(this.username, " - Roles: ").concat(this.role));
    };
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Type Guards (IsAdmin)
    User.prototype.isAdmin = function (user) {
        return user.getRole() === UserRole.Admin;
    };
    // Field (Access Modifiers)
    // private: Sadece sınıf içerisinde erişilebilir.
    // protected: Sadece sınıf ve kalıtım alan sınıflar içerisinde erişilebilir.
    // readonly: Sadece okunabilir bir alan oluşturur. Ancak burada ilk değer ataması yapılmalıdır.
    // sonradan değiştirilemez.
    // Sayaç: Encapsulation, static field
    // static: Tüm sınıf örnekerleri için aynı değeri paylaşan bir alan oluşturur.
    // private: Erişim belirlecei olan bu alan sadece sınıf içerisinde erişilebilir(Encapsulation).
    User.idCounter = 1;
    return User;
}()); // end of class User
exports.User = User;
