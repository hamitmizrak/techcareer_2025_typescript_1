var exam = "Merhabalar Ts";
console.log(exam);
///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES (DYNAMICS) ***********************************************
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
///////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////
//************** FUNCTION *************************************************
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
console.log(result4);
///////////////////////////////////////////////////////////////////////////
//************** CONDITON *************************************************
///////////////////////////////////////////////////////////////////////////
//************** WHILE ***************************************************
