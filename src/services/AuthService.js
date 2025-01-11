"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var User_1 = require("../models/User");
/*

*/
// Export: 
var AuthService = /** @class */ (function () {
    function AuthService() {
        // User import
        this.users = [];
    }
    ///////////////////////////////////////////////////////////
    // register (Kayıt Ol)
    AuthService.prototype.register = function (data) {
        if (data.password !== data.confirmPassword) {
            return "Password and Confirm Password do not match";
        }
        // User ekle
        var user = new User_1.User(data.username, data.password);
        this.users.push(user);
        return "User registered successfully. ID: ".concat(user.getId());
    };
    ///////////////////////////////////////////////////////////
    // login (Giriş Yap)
    AuthService.prototype.login = function (data) {
        var user = this.users.find(function (u) { return u.getUsername() === data.username; });
        // if (!user || !user.verifyPassword(data.password)) {
        if (!user) {
            return "User not found";
        }
        if (!user.verifyPassword(data.password)) {
            return "Password is incorrect";
        }
        return "Welcome ".concat(user.getRole(), " ").concat(user.getUsername);
    };
    // Users (User'ları getir)
    AuthService.prototype.getUsers = function () {
        return this.users;
    };
    // User Sil
    AuthService.prototype.deleteUser = function (username) {
        var user = this.users.findIndex(function (u) { return u.getUsername() === username; });
        if (user !== -1) {
            this.users.splice(user, 1);
            return true;
        }
        return false;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
