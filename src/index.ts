let exam = "Merhabalar Ts";
console.log(exam);

///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES ***********************************************
// Data Type Primitive Types
function normDataTypes() {
  // Normal Type
  var normTypeName = "Hamit44";
  normTypeName = 4423;
  console.log(normTypeName);
}
//normDataTypes();

///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES ***********************************************
// Datatype
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
//************** ANY **************************************
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
anyTypes();
