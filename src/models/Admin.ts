// User Eklendi
import { User } from "./User";

// Export Admin
// Extends: Kalıtımlama

/* 

*/

export class Admin extends User {
  // Constuctor
  constructor(username: string, password: string) {
    // Super: Kalıtımla gelen class özellikleri constructor içinde kullanmak için
    super(username, password);
  } //end of constructor

  // Role Normalde User'dı, Admin olarak değiştirildi
  public override getRole(): string {
    //return "Admin";
    return UserRole.Admin;
  }

  // Admin Bütün kullanıcları Listele
  public viewAllUser():string {
    return "Admin users are listed";
  }
} // end class Admin
