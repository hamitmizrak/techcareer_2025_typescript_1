var exam = "Merhabalar Ts";
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
};
//realDataTypesBoolean();
///////////////////////////////////////////////////////////////////////////
//************** DATA TYPES ***********************************************
// undefined , null ,zero
var otherDataTypes = function () {
};
otherDataTypes;
