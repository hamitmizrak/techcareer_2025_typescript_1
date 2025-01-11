/* 
Enum(Enumeration): Sabir dizi değer isimlendirilmesini oluşturmak için kullanılır.
Enum kısaca: Bir değişken yalnızca ama yalnızca belirli değerlerden birini alabilen veri türüdür.
Enum, sabit değerlerin bir araya getirilmesiyle oluşturulur.
Enum, bir değişkenin alabileceği değerleri sınırlamak için kullanılır.
Enum, bir değişkenin alabileceği değerleri daha anlaşılır hale getirmek için kullanılır.
Enum, bir değişkenin alabileceği değerleri daha okunabilir hale getirmek için kullanılır.
Enum, bir değişkenin alabileceği değerleri daha güvenli hale getirmek için kullanılır.

Enum Kullanımının Avantajları
Anlamlı Sabitler:
Sabit değerleri, okunabilir ve anlamlı hale getirir.

Örneğin, "User" yerine UserRole.User kullanımı, kodun anlaşılabilirliğini artırır.

Tür Güvenliği:
Enum kullanımı, yalnızca tanımlanan değerlere izin vererek hataların önüne geçer.

Kolay Yönetim:
Roller gibi sabit değerler için tek bir merkezden düzenleme sağlar.
Okunabilirlik:

String değerler yerine enum sabitlerini kullanmak, kodun daha açıklayıcı olmasını sağlar.
*/

// UserRole.ts
export enum UserRole {
    User = "User",
    Admin = "Admin",
    Moderator = "Moderator",
}

// for Example:
//const userRole: UserRole = UserRole.Admin;
//console.log(userRole); // Admin

/*
Enum'un Alternatifleri 
Eğer sabit değerler için enum kullanmak istemezseniz, aşağıdaki alternatifleri kullanabilirsiniz:
1-) TypeScript Union Types: 
    type UserRole = "User" | "Admin" | "Moderator";
    Ancak bu, enum kadar güçlü bir tür kontrolü sağlamaz.

2-) Const Nesneleri:
const UserRole = {
    User: "User",
    Admin: "Admin",
    Moderator: "Moderator",
} as const;

*/