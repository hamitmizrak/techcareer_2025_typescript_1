import { AuthService } from "./services/AuthService";
import { UserManager } from "./services/UserManagerService";
import { Logger } from "./utils/Logger";
import { Admin } from "./models/Admin";

// Service
const authService = new AuthService();
const adminManager = new UserManager<Admin>();

/////////////////////////////////////////////////////
console.log("+++++++ REGISTER +++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Doğru: Register Şifre ve kullanıcı bilgisi
Logger.log(authService.register({
    username:"hamitmizrak@gmail.com",
    password: "root",
    confirmPassword: "root"
}));

// Yanlış: Register Şifre ve kullanıcı bilgisi
Logger.log(authService.register({
    username:"hamitmizrak@gmail.com",
    password: "root",
    confirmPassword: "asd"
}));

/////////////////////////////////////////////////////
console.log("+++++++ LOGIN +++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Doğru: Login Bilgileri
Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "root",
}));

// Yanlış: Login Bilgileri
Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "yanlışlogin",
}))

/////////////////////////////////////////////////////
// Add Admin
console.log("+++++++ ADD ADMIN +++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const admin = new Admin("admin@gmail.com", "root");
adminManager.addUser(admin);
console.log(`${admin.getId()} ${admin.getUsername()} ${admin.getPassword()} ${admin.getRole()}`)

/////////////////////////////////////////////////////
// List All Admin
console.log("+++++++ ADMIN LIST +++++++++++++++++++++++++++++++++++++++++++++++++++++++");
adminManager.listUsers().forEach((admin) => {
    Logger.log(`ID: ${admin.getId()} - USERNAME: ${admin.getUsername()}- PASSWORD: ${admin.getPassword()}   - ROLE: ${admin.getRole()}`);
});

// List All User
console.log("+++++++ USER LIST +++++++++++++++++++++++++++++++++++++++++++++++++++++++");
authService.getUsers().forEach((user) => {
    Logger.log(`ID: ${user.getId()} - USERNAME: ${user.getUsername()}- PASSWORD: ${user.getPassword()} - ROLE: ${user.getRole()}`);
});
