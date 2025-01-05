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
//************** UNION TYPES **********************************************
// Union Types (Birleşik Türler)
// | işareti, TypeScript'te Union Types (Birleşik Türler) oluşturmak için kullanılır.
// TypeScript'te Union Types (Birleşik Türler) oluşturmak için kullanılır.
// Bu ifade, bir değişkenin birden fazla türde bir değer alabileceğini belirtir.
var unionTypes = function () {
    var name = null;
    console.log(name);
    var surname = "Mızrak";
    console.log(surname);
    var data = 44;
    //  let data: string | null |number = true; //yazma
    console.log(data);
};
//unionTypes();
/*
isim değişkeni ya bir string türünde değer alabilir ya da null olabilir.
| (pipe operatörü), string ve null türlerinin birleşimini oluşturur
 */
///////////////////////////////////////////////////////////////////////////
//************** NULLISH COALESCING *************************************************
// Nullish Coalescing (??)
// TypeScript'te ?? operatörü, bir değerin null veya undefined olup olmadığını kontrol eder. 
// Eğer değer null veya undefined ise alternatif bir değer döndürür.
// ?? operatörü, || operatöründen farklı olarak null ve undefined değerlerini kontrol eder.
// ?? operatörü, null ve undefined dışındaki değerler için çalışmaz.
var nullishCoalescing = function () {
    var isim = null;
    //let isim: string | null = null;
    //let isim: string | null = undefined;
    var sonuc = isim !== null && isim !== void 0 ? isim : "Varsayılan İsim";
    console.log(sonuc);
    // Çıktı: Varsayılan İsim
};
//nullishCoalescing();
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
// Tür kontrollü Şartlı yapı
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
//condition5();
///////////////////////////////////////////////////////////////////////////
//************** LOOP(FOR/WHILE) ***************************************************
/*
Döngüler, bir işlemi birden fazla kez tekrarlamak için kullanılan yapılar olup,
TypeScript'te JavaScript'in döngü yapıları aynen kullanılır.
Ancak TypeScript, tür güvenliği ile bu yapıları daha hatasız ve güvenilir hale getirir.
Döngüler, özellikle listeler veya diziler üzerinde işlem yaparken oldukça faydalıdır.
*/
// ****************** For
var loop1 = function () {
    for (var i = 0; i < 5; i++) {
        console.log("De\u011Fer: ".concat(i));
    }
};
//loop1()
//console.log();
//****************** */ For Sonsuz
var loop2 = function () {
    for (;;) {
        console.log("De\u011Fer: ".concat(i));
    }
};
//loop2()
console.log();
//*********************** */ While
var loop3 = function () {
    var i = 0;
    while (i < 5) {
        console.log("De\u011Fer: ".concat(i));
        //i++
        //i=i+1;
        i += 1;
    }
};
//loop3()
//console.log();
// *********************** */ While sonsuz
// While
var loop4 = function () {
    while (true) {
    }
};
//loop4()
// break ve continue Anahtar Kelimeleri
// break, döngüyü tamamen sonlandırır ve döngüden çıkar.
console.log();
var loop5 = function () {
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
};
//loop5()
// continue
// continue, döngünün o adımını atlar ve bir sonraki adıma geçer.
console.log();
var loop6 = function () {
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
};
//loop6()
//console.log();
///////////////////////////////////////////////////////////////////////////
//************** Array(Diziler) *******************************************
/*
Diziler (Arrays), birden fazla değeri tek bir veri yapısında saklamak için kullanılan temel veri tiplerinden biridir.
TypeScript, JavaScript dizilerinin tüm özelliklerini destekler ve buna ek olarak dizilere tür güvenliği ekler.
Böylece her elemanın aynı türde olduğu veya belirli türlerin bir karışımı olduğu garanti altına alınabilir.
 */
var array1 = function () {
    var sayilar = [1, 2, 3, 4, 5];
    console.log(sayilar[0]); // 1
    console.log(sayilar[3]); // 4
    sayilar.push(6);
    console.log(sayilar[sayilar.length - 1]); // 4
};
array1();
var array2 = function () {
    var matris = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(matris[1][2]); // 6
};
array2();
var arrayGenerics = function () {
    var isimler = ["Hamit", "Mızrak", "Typescript"];
    console.log(isimler[1]);
};
//arrayGenerics()
// Dizilerde (for)
var array5 = function () {
    var dizi = [10, 20, 30, 40];
    for (var i = 0; i < dizi.length; i++) {
        console.log("Eleman ".concat(i, ": ").concat(dizi[i]));
    }
};
//array5()
// Dizilerde (for of)
/*
for...of döngüsü, bir dizinin veya iteratif bir yapının elemanları üzerinde tekrarlanmasını sağlar.
Dizi elemanlarına odaklanır.
*/
var array6 = function () {
    var dizi = [10, 20, 30, 40];
    for (var _i = 0, dizi_1 = dizi; _i < dizi_1.length; _i++) {
        var temp = dizi_1[_i];
        console.log("Eleman: ".concat(temp));
    }
};
//array6()
// Dizilerde (for in)
/*
for...in döngüsü, bir nesnenin özellikleri (property) veya bir dizinin indeksleri (index) üzerinde tekrarlanır.
*/
var array7 = function () {
    var dizi = [10, 20, 30, 40];
    for (var temp in dizi) {
        console.log("Eleman: ".concat(temp));
    }
};
//array7()
//  Nested (İç İçe) Döngüler
var array8 = function () {
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            console.log("i: ".concat(i, ", j: ").concat(j));
        }
    }
};
//array8()
//************************************************************************
//************** Rest Parametreleri Function *****************************
// Rest Parametreleri: Fonksiyonlara sınırsız sayıda parametre göndermek için kullanılır.
// Bir fonksiyon, birden fazla parametreyi bir dizi olarak alabilir.
// Bu, ... (spread) operatörüyle yapılır
//////////////////////////////////////////////////////////////////////////////////
//************** Map, Set *******************************************************
// TypeScript, Map ve Set veri yapılarını döngü ile işlemeyi destekler.
// Map
var mapData = function () {
    var city = new Map([
        [1, "Hakkari"],
        [2, "Hatay"],
        [3, "Zonguldak"]
    ]);
    for (var _i = 0, city_1 = city; _i < city_1.length; _i++) {
        var _a = city_1[_i], anahtar = _a[0], deger = _a[1];
        console.log("".concat(anahtar, ": ").concat(deger));
    }
    console.log("data");
};
//mapData()
var setData = function () {
    var sayilar = new Set([10, 20, 30]);
    for (var _i = 0, sayilar_1 = sayilar; _i < sayilar_1.length; _i++) {
        var sayi = sayilar_1[_i];
        console.log(sayi);
    }
};
//setData()
//////////////////////////////////////////////////////////////////////////////////
//************** Generic Fonksiyonlar ********************************************
// Generic Fonksiyonlar: Fonksiyonlarımızı daha esnek hale getirmek için kullanılır.
/*
Şartlı Türler (Conditional Types)
TypeScript'te, T extends U ? X : Y yapısıyla şartlı türler tanımlanabilir.
Bu, bir türün başka bir türden türeyip türemediğine göre farklı türler döndürür.


type Mesaj<T> = T extends string ? string : number;

let mesaj1: Mesaj<string> = "Merhaba"; // Geçerli
let mesaj2: Mesaj<number> = 42; // Geçerli
*/
///////////////////////////////////////////////////////////////////////////
//************** Object (Nesne) *******************************************
// OOP
// Optional Chaining (?.)
// ?. operatörü, bir nesne veya değişkenin varlığını kontrol ederek, hataların önüne geçer.
var kullanici = {
    isim: "Hamit",
    adres: {
        sehir: "Malatya"
    }
};
// console.log(kullanici.adres?.sehir); // İstanbul
// console.log(kullanici.adres?.ulke); // undefined
// Class
// interface
// abstract
// instance
