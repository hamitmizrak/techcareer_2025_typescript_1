// User Eklendi
import { User } from "./User";

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

export class Admin extends User {

  // Constuctor
  constructor(username: string, password: string) {
    // Super: Kalıtımla gelen class özellikleri constructor içinde kullanmak için
    super(username, password);
  } //end of constructor

  // Role özelleştirimesi için Override yaptık.
  // Role Normalde User'dı, Admin olarak değiştirildi
  public override getRole(): string {
    //return "Admin";
    return UserRole.Admin;
  }

  // Admin Bütün kullanıcları Listele
  public viewAllUser():string {
    return "Admin users are listed";
  }

  // Authorization: Yetkilendirme
  public checkAccess(user:User){
    if(user.getRole() === UserRole.Admin){
        console.log("Admin erişimi verildi");
      return true;
    } else {
        console.log("Admin erişimi verilmedi");
        return false;
    }
  } //end checkAccess

} // end class Admin
