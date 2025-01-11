import { Admin } from "./models/Admin";
import { AuthService } from "./services/AuthService";
import { UserManager } from "./services/UserManagerService";
import { Logger } from "./utils/Logger";


// Service
const authService = new AuthService();
const adminManager= new UserManager();

/////////////////////////////////////////////////////
console.log("+++++++ REGISTER ++++++");
// Register User
// Doğru: Register Şifre ve kullanıcı bilgisi
Logger.log(
    authService.register({
        username:"hamitmizrak@gmail.com",
        password: "root",
        confirmPassword: "root"
    })
)
// Yanlış: RegisterŞifre ve kullanıcı bilgisi
Logger.log(
    authService.register({
        username:"hamitmizrak@gmail.com",
        password: "root",
        confirmPassword: "yanlışregister"
    })
)

/////////////////////////////////////////////////////
console.log("+++++++ LOGIN ++++++");
// Login User
// Doğru: Login Bilgileri
Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "root",
}))

// Doğru: Login Bilgileri
Logger.log(authService.login({
    username: "hamitmizrak@gmail.com",
    password: "yanlışlogin",
}))
/////////////////////////////////////////////////////
// Add Admin
console.log("+++++++ ADD ADMIN ++++++");
const admin = new Admin("admin","root")
adminManager.addUser(admin)

/////////////////////////////////////////////////////
// List All Admin
console.log("+++++++ ALL USERS ++++++");
authService.getUsers().forEach((user)=>Logger.log(`${user.getId} - ${user.getUsername} - ${user.getRole}`))

adminManager.listUsers().forEach((admin)=>Logger.log(`${admin.getId} - ${admin.getUsername} - ${admin.getRole}`))