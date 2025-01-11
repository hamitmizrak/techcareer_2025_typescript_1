import { User } from "../models/User";

// abstract
export abstract class UserService {

    // User import
    protected users: User[] = [];

    // Gövdesiz Method
    public abstract addUser(user: User): void;

    // Gövdeli Method
    public listUsers(): User[] {
        return this.users;
    }
    
} // end of class UserService