/* 
Logger typescript sınıfı oluşturuldu ve loglama işlemleri bu sınıf üzerinden yapılacaktır.
Loglama işlemleri için 4 farklı (seviye) metot oluşturuldu.
Logger sınıfı bir static(statik) sınıftır ve bu sınıf üzerinden metotlar çağrılabilir.

Statik Yapı: Logger sınıfındaki tüm fonksiyonlar statik olarak tanımlanmıştır.
Bu sınıf üzerinden nesne oluşturulmadan(instance) doğrudan metotlar çağrılabilir.
Bundan dolayı performansını arttırır ve daha az bellek tüketir.
*/
export class Logger {

  // LOG
  public static log(message: string): void {
    message = `[LOG]: ${message}`;
    console.log(message);
  }

  // ERROR
  public static error(message: string): void {
    message = `[ERROR]: ${message}`;
    console.log(message);
  }

  // WARN
  public static warn(message: string): void {
    message = `[WARN]: ${message}`;
    console.log(message);
  }

  // DEBUG
  public static debug(message: string): void {
    message = `[DEBUG]: ${message}`;
    console.log(message);
  }
} // end of class Logger
