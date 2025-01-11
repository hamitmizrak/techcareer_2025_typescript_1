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
