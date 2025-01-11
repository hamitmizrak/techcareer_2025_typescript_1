// Export the User class
export class User {
  // Field (Access Modifiers)

  // Sayaç: Encapsulation, static field
  private static idCounter: number = 1;

  // Field Attributes
  private id: number;
  protected username: string;
  private password: string;
  private readonly role: string = "User"; // Default Value: User

  // constructor: Kurucu Method
  constructor(username: string, password: string) {
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
  } // end of constructor

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

/*
    // Define the properties of the User class
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    
    // Define the constructor of the User class
    constructor(id: number, name: string, email: string, password: string, role: string, created_at: Date, updated_at: Date, deleted_at: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
*/
