// İçeriğe aktarmak(Import)
import {Ilogin} from "../interfaces/Ilogin";
import {UserRole} from "../utils/UserRole";

// Field (Access Modifiers)
// private: Sadece sınıf içerisinde erişilebilir.
// protected: Sadece sınıf ve kalıtım alan sınıflar içerisinde erişilebilir.

// readonly: Sadece okunabilir bir alan oluşturur. Ancak burada ilk değer ataması yapılmalıdır.
// sonradan değiştirilemez.

// Sayaç: Encapsulation, static field
// static: Tüm sınıf örnekerleri için aynı değeri paylaşan bir alan oluşturur.
// private: Erişim belirleceği olan bu alan sadece sınıf içerisinde erişilebilir(Encapsulation).

// Export: Diğer Classlarda da kullanabilmek için
export class User {
    private static idCounter: number = 1;

    // Field Attributes
    private id: number; // Her kullanıcı için özel ID
    protected username: string; // Kullanıcı adı
    private password: string; // Kullanıcı şifresi

    //private readonly role: string = "User"; // Default Value: User
    private role: UserRole;
    private lastLogin: Date | null = null; // en son admin giriş tarihi

    // constructor: Kurucu Method
    constructor(username: string, password: string, role: UserRole = UserRole.User) {
        this.id = User.idCounter++;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Function: Method
    public updateLastLogin(): void {
        this.lastLogin = new Date();
    }

    public getLastLogin(): Date | null {
        return this.lastLogin;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Encapsulation: Getter Method
    // ID
    public getId(): number {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public verifyPassword(password: string): boolean {
        return this.password === password;
    }

    public getRole(): UserRole {
        return this.role;
    }

    public setRole(newRole: UserRole): void {
        this.role = newRole;
    }

    ///////////////////////////////////////////////////////////
    // Yetkilendirme
    specialPage(): void {
        if (UserRole.Admin === this.role) {
            console.log("Admin sayfasına hoşgeldiniz");
        } else if (UserRole.Moderator === this.role) {
            console.log("Moderator sayfasına hoşgeldiniz");
        }
    }

    // Remember Me
    loginUser(data: Ilogin): void {
        console.log(`User Logged In${data.username}`);
        if (data.rememberMe) {
            console.log("Remember Me özelliği ile kullanıcıyı artık tanıyorum");
        } else {
            console.log("");
        }
    }

    // Kullanıcı Bilgileri Göster
    public displayUserInfo(): void {
        console.log(
            `User Info: User ID: ${this.id} - username: ${this.username} - Roles: ${this.role}`
        );
    }
} // end of class User
