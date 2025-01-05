let exam = "Merhabalar Ts";
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
//************** FUNCTION *************************************************
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
console.log(result4);


///////////////////////////////////////////////////////////////////////////
//************** CONDITON *************************************************


///////////////////////////////////////////////////////////////////////////
//************** WHILE ***************************************************