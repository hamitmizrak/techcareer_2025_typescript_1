var exam = "Merhabalar Ts";
console.log(exam);
///////////////////////////////////////////////////////////////////////////
//**************OPERATOR ************************************
/*
+ - * / % ++ -- && || ! == === != !== > < >= <=
*/
var operator = function () {
    var num1 = 13;
    var num2 = 5;
    console.log("Toplam: " + (num1 + num2));
    console.log("Fark: " + (num1 - num2));
    console.log("Çarpım: " + num1 * num2);
    console.log("Bölüm: " + num1 / num2);
    console.log("Mod: " + num1 % num2);
    console.log("Arttır: " + num1++);
    console.log("Azalt: " + num1--);
    console.log("Arttır: " + ++num1);
    console.log("Azalt: " + --num1);
};
///////////////////////////////////////////////////////////////////////////
//**************MATH ************************************
var math = function () {
    console.log("Math.PI: " + Math.PI);
    console.log("Math.abs(-13): " + Math.abs(-13));
    console.log("Math.ceil(13.2): " + Math.ceil(13.2));
    console.log("Math.floor(13.9): " + Math.floor(13.9));
    console.log("Math.round(13.2): " + Math.round(13.2));
    console.log("Math.round(13.9): " + Math.round(13.9));
    console.log("Math.random(): " + Math.random());
    console.log("Math.max(13,5): " + Math.max(13, 5));
    console.log("Math.min(13,5): " + Math.min(13, 5));
};
///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES (DYNAMICS) ************************************
// Dynamics Datatype
// Data Type Primitive Types
function normDataTypes() {
    // Normal Type
    var normTypeName = "Hamit44";
    normTypeName = 4423;
    console.log(normTypeName);
}
//normDataTypes();
///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES (STATIC) ***************************************
// Static Datatype
// string
function realDataTypesString() {
    var name = "Hamit";
    name = "HamitM";
    //name= 44; //yapma
    console.log(name);
    // 1.YOL
    //let surname:string = "Mızrak", fullName:string = name + " " + surname;
    // 2.YOL
    // let surname:string = "Mızrak";
    // let fullName:string = name + " " + surname;
    // 3. YOL (type safe, interpolation, backtick)
    var surname = "Mızrak";
    // interpolation
    var fullName = "".concat(name, " ").concat(surname);
    console.log(fullName);
}
//realDataTypesString();
// Datatype
// number
var realDataTypesNumber = function () {
    var school = 4423;
    console.log(school);
    var decimal = 13.5;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    console.log(decimal, hex, binary, octal);
};
//realDataTypesNumber();
// Datatype
// boolean
var realDataTypesBoolean = function () {
    var active = true;
    console.log(active);
    var passive = false;
    console.log(passive);
    // typeof: Verilen türün cinsini belirler.
    console.log(typeof passive);
};
//realDataTypesBoolean();
///////////////////////////////////////////////////////////////////////////
//************** UNDEFINED/NULL/ZERO **************************************
// undefined , null ,zero
// undefined: Değişken tanımlanmış ama değer atanmamış
// null     : Değişken tanımlanmış ve değeri null atanmış
// zero     : Değişken tanımlanmış ve değeri 0 atanmış
var otherDataTypes = function () {
    var address = undefined;
    console.log(address);
    var address2 = null;
    console.log(address2);
    var address3 = 0;
    console.log(address3);
};
//otherDataTypes();
///////////////////////////////////////////////////////////////////////////
//************** ANY ******************************************************
// any: Değişkenin tipi belirsiz olduğunda kullanılır
// number,boolen,string,undefined,null hepsini kapsar
// any kullanımı genellikle veri tipi belirsiz olduğunda kullanılır
// any yapısının kullanımı tip güvenliğini azaltır ve hata yapma olasılığını artırır.
var anyTypes = function () {
    var staticData = "Typescript";
    console.log(staticData);
    // Değişken türünü bilmiyorum
    var dynamicData = "Typescript";
    dynamicData = 13.5;
    dynamicData = true;
    console.log(dynamicData);
};
//anyTypes();
///////////////////////////////////////////////////////////////////////////
//************** UNKNOWN **************************************************
// unknown: Değişkenin tipi belirsiz olduğunda kullanılır
// any: unknown farkı
// any: any kullanıldığında tip güvenliği azalır
// unknown: unknown kullanıldığında tip güvenliği artar
var unknownTypes = function () {
    var bilinmeyen = "Typescript";
    bilinmeyen = 44.23; // virgüllü sayı
    bilinmeyen = 44; // Tam sayı
    bilinmeyen = true; // Tam sayı
    console.log(bilinmeyen);
    // unknown tipindeki değişkeni kullanmak için tip kontrolü yapılmalıdır yoksa hata alırız
    if (typeof bilinmeyen === "string") {
        console.log("String tipinde veri: " + bilinmeyen);
    }
    else if (typeof bilinmeyen === "number") {
        console.log("Number tipinde veri: " + bilinmeyen);
    }
    else if (typeof bilinmeyen === "boolean") {
        console.log("Boolan tipinde veri: " + bilinmeyen);
    }
};
//unknownTypes();
///////////////////////////////////////////////////////////////////////////
//************** FUNCTION *************************************************
// 1-) Void
// 2-) Never
// 3-) Parametresiz, Retursuz Function
// 4-) Parametreli, Retursuz Function
// 5-) Parametresiz, Returlu Function
// 6-) Parametreli, Returlu Function
// 7-) İsteğe Bağlı (Optional) Parametreler
// 8-) Varsayılan Parametreler
// 9-) Overloading (Fonksiyon Aşırı Yükleme)
//********************************************************************** */
//************** VOID *****************************************************
// void: Herhangi bir veri tipi döndürmeyen fonksiyonlarda kullanılır
var voidTypes = function () {
    console.log("void değeri");
    //return "Merhaba Typescript"; // Hata void değer döndürmez
    //return 44; // Hata void değer döndürmez
    //return true; // Hata void değer döndürmez
    //return null; // Hata void değer döndürmez
    //return undefined; // Hata void değer döndürmez
    //return; // Doğru
};
//voidTypes();
//********************************************************************** */
//************** NEVER *****************************************************
// never: Asla bir değer döndürmeyen fonksiyonlarda kullanılır.
// never: Sonsuz döngü, hata fırlatma gibi durumlarda kullanılır.
// never: Asla fonksiyonun sonuna ulaşmayan fonksiyonlarda kullanılır.
// never: Asla bir hata döndürmeyen fonksiyonlarda kullanılır.
// never: Asla sonsuz döngüde olmayan fonksiyonlarda kullanılır.
// HATA FIRLAT
function hataFirlat(message) {
    throw new Error(message);
}
//hataFirlat("Hata fırlatıldı");
// SONSUZ DÖNGÜ
function sonsuzDongu() {
    while (true) {
        console.log("Sonsuz Döngü");
    }
}
//sonsuzDongu()
//********************************************************************** */
//************** FUNCTION *************************************************
/* TypeScript, fonksiyonların türlerini belirlerken oldukça esnek
ve güçlü bir sistem sunar. Fonksiyon türleri sayesinde,
hem giriş parametreleri hem de dönüş değerlerinin türlerini açıkça belirtebiliriz.
Bu, yazılım geliştirme sürecinde daha güvenli, okunabilir ve
bakım kolaylığı sağlayan kod yazmamızı mümkün kılar.
*/
// 1-Parametresiz, Retursuz Function
function notParameterNotReturn() {
    console.log("Parametresiz, Retursuz Function");
}
//notParameterNotReturn();
// 2-Parametreli, Retursuz Function
function parameterNotReturn(name, data, isLogin) {
    console.log("Parametreli, Retursuz Function: ".concat(name, ",").concat(data, ",").concat(isLogin, ", "));
}
//parameterNotReturn("Hamit",4423,true);
// 3-Parametresiz, Returlu Function
function notParameterReturn() {
    return "Parametresiz, Returlu Function";
}
var result3 = notParameterReturn();
//console.log(result3);
// 4-Parametreli, Returlu Function
function parameterReturn(name, data, isLogin) {
    return "Parametreli, Returlu Function: ".concat(name, ",").concat(data, ",").concat(isLogin, ", ");
}
var result4 = parameterReturn("Hamit", 4423, true);
//console.log(result4);
//******************************************************************************** */
//************** Optional Function *************************************************
// İsteğe Bağlı (Optional) Parametreler: Fonksiyonlara bazen parametre göndermek veya görmemek isteyebiliriz.
// Kullanımı=> surname?:string
function OptionalFunction(name, surname, middleName // eğer kullanıcının orta adı yoksa yazmaya gerek yok ve undefined döner
) {
    console.log("Optional Function: ".concat(name, ",").concat(middleName, ",").concat(surname, ", "));
}
//OptionalFunction("Hamit", "Mızrak");
//OptionalFunction("Hamit", "Mızrak","ortaisim");
//********************************************************************** */
//************** Varsayılan Parametreler Function ************************
// Varsayılan Parametreler: Bir parametreye varsayılan bir değer atanabilir.
// Eğer bu parametreye bir değer geçilmezse, varsayılan değer kullanılır.
//  Varsayılan Parametreler Function
function defaultParameterFunction(name, data, isLogin) {
    if (name === void 0) { name = "adı girmediniz"; }
    if (data === void 0) { data = 0; }
    if (isLogin === void 0) { isLogin = false; }
    console.log(" Varsay\u0131lan Parametreler Function : ".concat(name, ",").concat(data, ",").concat(isLogin, " "));
}
// defaultParameterFunction("Hamit", 4423, true);
// defaultParameterFunction("Hamit", 4423);
// defaultParameterFunction("Hamit");
// defaultParameterFunction();
///////////////////////////////////////////////////////////////////////////
//************** Overloading (Fonksiyon Aşırı Yükleme) ************************
// Overloading (Fonksiyon Aşırı Yükleme):
// Aynı isimde fakat farklı parametrelerle birden fazla fonksiyon tanımlamak.
var overloadingFunction = function (name, surname) {
    console.log("Overloading Function: ".concat(name, "- ").concat(surname));
};
//overloadingFunction("Hamit","Mızrak");
var overloadingFunction = function (name, isLogin) {
    console.log("Overloading Function: ".concat(name, "- ").concat(isLogin));
};
//overloadingFunction("Hamit",true);
///////////////////////////////////////////////////////////////////////////
//************** CONDITON *************************************************
// if else
var condition1 = function () {
    var isActive = true;
    if (isActive) {
        console.log("Kullanıcı Aktif");
    }
    else {
        console.log("Kullanıcı Pasif");
    }
};
//condition1();
// Ternary(üçlü operatör)  koşul?true:false
var condition2 = function () {
    var isActive = true;
    var result = isActive ? "Kullanıcı Aktif" : "Kullanıcı Pasif";
    console.log(result);
};
//condition2();
// if else if else
var condition3 = function () {
    //let data: number = Math.floor(Math.random() * 6);
    var data = 5;
    //console.log("sayı: " + data);
    //let userData= prompt("Lütfen bir sayı giriniz: ");
    if (data === 1) {
        console.log("1");
    }
    else if (data === 2) {
        console.log("2");
    }
    else if (data === 3) {
        console.log("4");
    }
    else if (data === 5) {
        console.log("5");
    }
    else {
        console.log("Sayı 1<=X<=5 arasında değil");
    }
};
//condition3();
// switch case
var condition4 = function () {
    var data = 5;
    //console.log("sayı: " + data);
    //let userData= prompt("Lütfen bir sayı giriniz: ");
    switch (data) {
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        case 5:
            console.log("5");
            break;
        default:
            console.log("Sayı 1<=X<=5 arasında değil");
            break;
    }
};
//condition4();
// Tür kontrollü ŞArtlı yapı
// if else
var condition5 = function () {
    var isActive = true;
    // Tür kontrollü Şartlı yapı
    if (typeof isActive === "boolean") {
        if (isActive) {
            console.log("Kullanıcı Aktif");
        }
        else {
            console.log("Kullanıcı Pasif");
        }
    }
    else {
        console.log("Değişken boolean değil");
    }
};
condition5();
///////////////////////////////////////////////////////////////////////////
//************** WHILE ***************************************************
///////////////////////////////////////////////////////////////////////////
//************** Array(Diziler) *******************************************
//************************************************************************
//************** Rest Parametreleri Function *****************************
// Rest Parametreleri: Fonksiyonlara sınırsız sayıda parametre göndermek için kullanılır.
// Bir fonksiyon, birden fazla parametreyi bir dizi olarak alabilir.
// Bu, ... (spread) operatörüyle yapılır
///////////////////////////////////////////////////////////////////////////
//************** Generic Fonksiyonlar ************************
// Generic Fonksiyonlar: Fonksiyonlarımızı daha esnek hale getirmek için kullanılır.
