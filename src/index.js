"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admin_1 = require("./models/Admin");
var AuthService_1 = require("./services/AuthService");
var UserManagerService_1 = require("./services/UserManagerService");
var Logger_1 = require("./utils/Logger");
// Service
var authService = new AuthService_1.AuthService();
var adminManager = new UserManagerService_1.UserManager();
/////////////////////////////////////////////////////
console.log("+++++++ REGISTER ++++++");
// Register User
// Doğru: Register Şifre ve kullanıcı bilgisi
Logger_1.Logger.log(authService.register({
    username: "hamitmizrak@gmail.com",
    password: "root",
    confirmPassword: "root"
}));
// Yanlış: RegisterŞifre ve kullanıcı bilgisi
Logger_1.Logger.log(authService.register({
    username: "hamitmizrak@gmail.com",
    password: "root",
    confirmPassword: "yanlışregister"
}));
/////////////////////////////////////////////////////
console.log("+++++++ LOGIN ++++++");
// Login User
// Doğru: Login Bilgileri
Logger_1.Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "root",
}));
// Doğru: Login Bilgileri
Logger_1.Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "yanlışlogin",
}));
/////////////////////////////////////////////////////
// Add Admin
console.log("+++++++ ADD ADMIN ++++++");
var admin = new Admin_1.Admin("admin", "root");
adminManager.addUser(admin);
/////////////////////////////////////////////////////
// List All Admin
console.log("+++++++ ALL USERS ++++++");
authService.getUsers().forEach(function (user) { return Logger_1.Logger.log("".concat(user.getId, " - ").concat(user.getUsername, " - ").concat(user.getRole)); });
adminManager.listUsers().forEach(function (admin) { return Logger_1.Logger.log("".concat(admin.getId, " - ").concat(admin.getUsername, " - ").concat(admin.getRole)); });
