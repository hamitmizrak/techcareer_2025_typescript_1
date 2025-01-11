// Export the User class
export class User {
  // Field (Access Modifiers)

  // Sayaç: Encapsulation, static field
  private static idCounter: number = 1;

  // Field Attributes
  private id: number;
  protected username: string;
  private password: string;
  //private readonly role: string = "User"; // Default Value: User
  private readonly role: string = UserRole; // Default Value: User
  private lastLogin: Date | null = null; // en son admin giriş tarihi

  // constructor: Kurucu Method
  constructor(username: string, password: string, role:UserRole=UserRole.User) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
    this.role = role;
  } // end of constructor

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Function: Method
  public updateLastLogin(): void {
    this.lastLogin = new Date();
  }

  public getLastLogin(): Date | null {
    return this.lastLogin;
  }

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Encapsulation: Getter Method
  // ID
  public getId(): number {
    return this.id;
  }

  // USERNAME
  public getUsername(): string {
    return this.username;
  }

  // PASSWORD
  public verifyPassword(password: string): boolean {
    return this.password === password;
  }

  // ROLE
  public getRole(): string {
    return this.role;
  }
} // end of class User
