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
//************** UNION TYPES **********************************************
// Union Types (Birleşik Türler)
// | işareti, TypeScript'te Union Types (Birleşik Türler) oluşturmak için kullanılır.
// TypeScript'te Union Types (Birleşik Türler) oluşturmak için kullanılır.
// Bu ifade, bir değişkenin birden fazla türde bir değer alabileceğini belirtir.

let unionTypes = function (): void {
    let name: string | null = null;
    console.log(name);

    let surname: string | null = "Mızrak";
    console.log(surname);

    let data: string | null | number = 44;
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
let nullishCoalescing  = function (): void {
    let isim: string | null = null;

    //let isim: string | null = null;
    //let isim: string | null = undefined;
    let sonuc = isim ?? "Varsayılan İsim";
    console.log(sonuc);
    // Çıktı: Varsayılan İsim
  };
 //nullishCoalescing();

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

// Tür kontrollü Şartlı yapı
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
let  loop1=()=>{
    for (let i = 0; i < 5; i++) {
        console.log(`Değer: ${i}`);
    }
}
//loop1()
//console.log();

//****************** */ For Sonsuz
let  loop2=()=>{
    for (;;) {
        console.log(`Değer: ${i}`);
    }
}
//loop2()
console.log();

//*********************** */ While
let  loop3=()=>{
    let i:number = 0;
    while ( i < 5) {
        console.log(`Değer: ${i}`);
        //i++
        //i=i+1;
        i+=1
    }
}
//loop3()
//console.log();

// *********************** */ While sonsuz
// While
let  loop4=()=>{

    while ( true) {
    }
}
//loop4()

// break ve continue Anahtar Kelimeleri
// break, döngüyü tamamen sonlandırır ve döngüden çıkar.
console.log();
let  loop5=()=>{
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}
//loop5()

// continue
// continue, döngünün o adımını atlar ve bir sonraki adıma geçer.
console.log();
let  loop6=()=>{
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}
//loop6()
//console.log();

///////////////////////////////////////////////////////////////////////////
//************** Array(Diziler) *******************************************
/*
Diziler (Arrays), birden fazla değeri tek bir veri yapısında saklamak için kullanılan temel veri tiplerinden biridir. 
TypeScript, JavaScript dizilerinin tüm özelliklerini destekler ve buna ek olarak dizilere tür güvenliği ekler. 
Böylece her elemanın aynı türde olduğu veya belirli türlerin bir karışımı olduğu garanti altına alınabilir.
 */

let  array1=()=>{
    let sayilar: number[] = [1, 2, 3, 4, 5];
    console.log(sayilar[0]); // 1
    console.log(sayilar[3]); // 4

    sayilar.push(6);
    console.log(sayilar[sayilar.length-1]); // 4
}
array1()

let  array2=()=>{
    let matris: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(matris[1][2]); // 6
}
array2()


let  arrayGenerics=()=>{
    let isimler: Array<string> = ["Hamit", "Mızrak", "Typescript"];
    console.log(isimler[1]);
}
//arrayGenerics()


// Dizilerde (for)
let  array5=()=>{
    let dizi: number[] = [10, 20, 30, 40];
    for (let i = 0; i < dizi.length; i++) {
        console.log(`Eleman ${i}: ${dizi[i]}`);
    }
}
//array5()

// Dizilerde (for of)
/*
for...of döngüsü, bir dizinin veya iteratif bir yapının elemanları üzerinde tekrarlanmasını sağlar. 
Dizi elemanlarına odaklanır.
*/
let  array6=()=>{
    let dizi: number[] = [10, 20, 30, 40];
    for (let temp of dizi) {
        console.log(`Eleman: ${temp}`);
        
    }
}
//array6()

// Dizilerde (for in)
/*
for...in döngüsü, bir nesnenin özellikleri (property) veya bir dizinin indeksleri (index) üzerinde tekrarlanır.
*/
let  array7=()=>{
    let dizi: number[] = [10, 20, 30, 40];
    for (let temp in dizi) {
        console.log(`Eleman: ${temp}`);
        
    }
}
//array7()

//  Nested (İç İçe) Döngüler
let  array8=()=>{
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(`i: ${i}, j: ${j}`);
        }
    }
}
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
let  mapData=()=>{
    let city = new Map([
        [1, "Hakkari"],
        [2, "Hatay"],
        [3, "Zonguldak"]
    ]);
    
    for (let [anahtar, deger] of city) {
        console.log(`${anahtar}: ${deger}`);
    }
    console.log("data");
    
}
//mapData()


let  setData=()=>{
    let sayilar = new Set([10, 20, 30]);
for (let sayi of sayilar) {
    console.log(sayi);
}
    
}
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
let kullanici = {
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