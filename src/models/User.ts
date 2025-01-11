// İçeriğe aktarmak(Import)
import { Admin } from "./Admin";

// Export: Diğer Classlarda da kullanabilmek için
export class User {
  // Field (Access Modifiers)
  // private: Sadece sınıf içerisinde erişilebilir.
  // protected: Sadece sınıf ve kalıtım alan sınıflar içerisinde erişilebilir.

  // readonly: Sadece okunabilir bir alan oluşturur. Ancak burada ilk değer ataması yapılmalıdır.
  // sonradan değiştirilemez.

  // Sayaç: Encapsulation, static field
  // static: Tüm sınıf örnekerleri için aynı değeri paylaşan bir alan oluşturur.
  // private: Erişim belirlecei olan bu alan sadece sınıf içerisinde erişilebilir(Encapsulation).
  private static idCounter: number = 1;

  // Field Attributes
  private id: number;
  protected username: string;
  private password: string;

  //private readonly role: string = "User"; // Default Value: User
  private readonly role = UserRole; // Default Value: User
  private lastLogin: Date | null = null; // en son admin giriş tarihi

  // constructor: Kurucu Method
  constructor(
    username: string,
    password: string,
    role: UserRole = UserRole.User
  ) {
    this.id = User.idCounter++; // benzersiz bir ID için(Unique ID)
    this.username = username;
    this.password = password;
    this.role = role;
  } // end of constructor

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

  // USERNAME
  public getUsername(): string {
    return this.username;
  }

  // PASSWORD
  public verifyPassword(password: string): boolean {
    return this.password === password;
  }

  // ROLE
  public getRole(): string {
    return this.role;
  }

  // Yetkilendirme
  specialPage(): void {
    if (UserRole.Admin === this.role) {
      console.log("Admin sayfasına hoşgeldiniz");
    } else if (UserRole.Moderator === this.role) {
      console.log("Moderator sayfasına hoşgeldiniz");
    }
  }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Type Guards (IsAdmin)
  isAdmin(user: User): user is Admin {
    return user.getRole() === UserRole.Admin;
  }
} // end of class User
