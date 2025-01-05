let exam = "Merhabalar Ts";
console.log(exam);

///////////////////////////////////////////////////////////////////////////
//**************OPERATOR ************************************
/*
+ - * / % ++ -- && || ! == === != !== > < >= <=
*/
let operator = () => {
    let num1: number = 13;
    let num2: number = 5;
  
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
let math = () => {
    console.log("Math.PI: " + Math.PI);
    console.log("Math.abs(-13): " + Math.abs(-13));
    console.log("Math.ceil(13.2): " + Math.ceil(13.2));
    console.log("Math.floor(13.9): " + Math.floor(13.9));
    console.log("Math.round(13.2): " + Math.round(13.2));
    console.log("Math.round(13.9): " + Math.round(13.9));
    console.log("Math.random(): " + Math.random());
    console.log("Math.max(13,5): " + Math.max(13, 5));
    console.log("Math.min(13,5): " + Math.min(13, 5));
  }
}


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
  let name: string = "Hamit";
  name = "HamitM";
  //name= 44; //yapma
  console.log(name);

  // 1.YOL
  //let surname:string = "Mızrak", fullName:string = name + " " + surname;

  // 2.YOL
  // let surname:string = "Mızrak";
  // let fullName:string = name + " " + surname;

  // 3. YOL (type safe, interpolation, backtick)
  let surname: string = "Mızrak";

  // interpolation
  let fullName: string = `${name} ${surname}`;
  console.log(fullName);
}
//realDataTypesString();

// Datatype
// number
let realDataTypesNumber = function () {
  let school: number = 4423;
  console.log(school);

  let decimal: number = 13.5;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  console.log(decimal, hex, binary, octal);
};
//realDataTypesNumber();

// Datatype
// boolean
let realDataTypesBoolean = function () {
  let active: boolean = true;
  console.log(active);

  let passive: boolean = false;
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
let otherDataTypes = () => {
  let address: undefined = undefined;
  console.log(address);

  let address2: null = null;
  console.log(address2);

  let address3: number = 0;
  console.log(address3);
};
//otherDataTypes();

///////////////////////////////////////////////////////////////////////////
//************** ANY ******************************************************
// any: Değişkenin tipi belirsiz olduğunda kullanılır
// number,boolen,string,undefined,null hepsini kapsar
// any kullanımı genellikle veri tipi belirsiz olduğunda kullanılır
// any yapısının kullanımı tip güvenliğini azaltır ve hata yapma olasılığını artırır.
let anyTypes = () => {
  let staticData: string = "Typescript";
  console.log(staticData);

  // Değişken türünü bilmiyorum
  let dynamicData: any = "Typescript";
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
let unknownTypes = () => {
  let bilinmeyen: unknown = "Typescript";
  bilinmeyen = 44.23; // virgüllü sayı
  bilinmeyen = 44; // Tam sayı
  bilinmeyen = true; // Tam sayı
  console.log(bilinmeyen);

  // unknown tipindeki değişkeni kullanmak için tip kontrolü yapılmalıdır yoksa hata alırız
  if (typeof bilinmeyen === "string") {
    console.log("String tipinde veri: " + bilinmeyen);
  } else if (typeof bilinmeyen === "number") {
    console.log("Number tipinde veri: " + bilinmeyen);
  } else if (typeof bilinmeyen === "boolean") {
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
let voidTypes = (): void => {
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
function hataFirlat(message: string): never {
  throw new Error(message);
}
//hataFirlat("Hata fırlatıldı");

// SONSUZ DÖNGÜ
function sonsuzDongu(): never {
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
function notParameterNotReturn(): void {
  console.log("Parametresiz, Retursuz Function");
}
//notParameterNotReturn();

// 2-Parametreli, Retursuz Function
function parameterNotReturn(
  name: string,
  data: number,
  isLogin: boolean
): void {
  console.log(`Parametreli, Retursuz Function: ${name},${data},${isLogin}, `);
}
//parameterNotReturn("Hamit",4423,true);

// 3-Parametresiz, Returlu Function
function notParameterReturn(): string {
  return "Parametresiz, Returlu Function";
}
let result3 = notParameterReturn();
//console.log(result3);

// 4-Parametreli, Returlu Function
function parameterReturn(name: string, data: number, isLogin: boolean): string {
  return `Parametreli, Returlu Function: ${name},${data},${isLogin}, `;
}
let result4 = parameterReturn("Hamit", 4423, true);
//console.log(result4);

//******************************************************************************** */
//************** Optional Function *************************************************
// İsteğe Bağlı (Optional) Parametreler: Fonksiyonlara bazen parametre göndermek veya görmemek isteyebiliriz.
// Kullanımı=> surname?:string
function OptionalFunction(
  name: string,
  surname: string,
  middleName?: string // eğer kullanıcının orta adı yoksa yazmaya gerek yok ve undefined döner
): void {
  console.log(`Optional Function: ${name},${middleName},${surname}, `);
}
//OptionalFunction("Hamit", "Mızrak");
//OptionalFunction("Hamit", "Mızrak","ortaisim");

//********************************************************************** */
//************** Varsayılan Parametreler Function ************************
// Varsayılan Parametreler: Bir parametreye varsayılan bir değer atanabilir.
// Eğer bu parametreye bir değer geçilmezse, varsayılan değer kullanılır.

//  Varsayılan Parametreler Function
function defaultParameterFunction(
  name: string = "adı girmediniz",
  data: number = 0,
  isLogin: boolean = false
): void {
  console.log(
    ` Varsayılan Parametreler Function : ${name},${data},${isLogin} `
  );
}
// defaultParameterFunction("Hamit", 4423, true);
// defaultParameterFunction("Hamit", 4423);
// defaultParameterFunction("Hamit");
// defaultParameterFunction();

///////////////////////////////////////////////////////////////////////////
//************** Overloading (Fonksiyon Aşırı Yükleme) ************************
// Overloading (Fonksiyon Aşırı Yükleme):
// Aynı isimde fakat farklı parametrelerle birden fazla fonksiyon tanımlamak.
let overloadingFunction = function (name: string, surname: string): void {
  console.log(`Overloading Function: ${name}- ${surname}`);
};
//overloadingFunction("Hamit","Mızrak");

let overloadingFunction = function (name: string, isLogin: boolean): void {
  console.log(`Overloading Function: ${name}- ${isLogin}`);
};
//overloadingFunction("Hamit",true);

///////////////////////////////////////////////////////////////////////////
//************** CONDITON *************************************************

// if else
let condition1 = function (): void {
  let isActive: boolean = true;
  if (isActive) {
    console.log("Kullanıcı Aktif");
  } else {
    console.log("Kullanıcı Pasif");
  }
};
//condition1();

// Ternary(üçlü operatör)  koşul?true:false
let condition2 = function (): void {
  let isActive: boolean = true;
  let result = isActive ? "Kullanıcı Aktif" : "Kullanıcı Pasif";
  console.log(result);
};
//condition2();

// if else if else
let condition3 = function (): void {
  //let data: number = Math.floor(Math.random() * 6);
  let data: number = 5;
  //console.log("sayı: " + data);

  //let userData= prompt("Lütfen bir sayı giriniz: ");
  if (data === 1) {
    console.log("1");
  } else if (data === 2) {
    console.log("2");
  } else if (data === 3) {
    console.log("4");
  } else if (data === 5) {
    console.log("5");
  } else {
    console.log("Sayı 1<=X<=5 arasında değil");
  }
};
//condition3();

// switch case
let condition4 = function (): void {
  let data: number = 5;
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
let condition5 = function (): void {
    let isActive: boolean = true;

    // Tür kontrollü Şartlı yapı
    if(typeof isActive === "boolean"){
        if (isActive) {
            console.log("Kullanıcı Aktif");
          } else {
            console.log("Kullanıcı Pasif");
          }
    }else{
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
