// 
import { Ilogin } from "./Ilogin";
/* 
IRegister extends Ilogin: IRegister daha önce oluşturduğumuz Ilogin interface'ini extends ediyor.
*/
// Extends: interface ekledim
export interface IRegister extends Ilogin {
    confirmPassword: string;
}