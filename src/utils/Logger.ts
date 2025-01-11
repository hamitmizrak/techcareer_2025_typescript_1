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
} // end of class Logger
