"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
// Generics Class
var UserManager = /** @class */ (function () {
    function UserManager() {
        // User import
        this.users = [];
    }
    // Kullanıcı Ekle
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    // Kullanıcıları Listele
    UserManager.prototype.listUsers = function () {
        return this.users;
    };
    // Kullanıcıyı Username Göre Bul
    UserManager.prototype.findUserByUsername = function (username) {
        return this.users.find(function (u) { return u.getUsername() === username; });
    };
    // Kullanıcıyı Username Göre Bul
    UserManager.prototype.findUserByUserId = function (userId) {
        return this.users.find(function (u) { return u.getId() === userId; });
    };
    // Kullanıcı Obje'ye Göre Sil
    UserManager.prototype.removeUser = function (user) {
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
    };
    // Kullanıcı ID'ye Göre Sil
    UserManager.prototype.removeUserById = function (userId) {
        var user = this.users.findIndex(function (u) { return u.getId() === userId; });
        if (user !== -1) {
            this.users.splice(user, 1);
            return true;
        }
        return false;
    };
    return UserManager;
}()); // end of class UserManager
exports.UserManager = UserManager;
