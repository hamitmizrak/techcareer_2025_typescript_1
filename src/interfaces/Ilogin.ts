/* 
Typescript'te bir nesensin yapısını tanımlamak ve bu interface'i implemente eden sınıfların bu yapıya uymasını sağlamak için kullanılır.
Interface'ler sadece tanımlama yaparlar, içerisinde herhangi bir kod bulunmaz.
Interface'ler sadece metot, property ve event tanımlamaları yaparlar.
Interface'lerin metotları ve property'leri default olarak public'tir.
Interface yapsıı sahip nesnesin oluşturulmasını sağlar ve tür güvenliği sağlar(type safe).
*/
export interface Ilogin {
    username:string;
    password:string;
    //password:"asd123" | "qwe123" | "zxc123"; // Default Value
    rememberMe?:boolean; // Optional Property

} // end of interface Ilogin