import { User } from "../models/User";

// Generics Class
export class UserManager <T extends User> {
    // User import
    private users: T[] = [];

    // addUser
    public addUser(user: T): void {
        this.users.push(user);
    }

    // Bütün Kullanıcıları Getir
    public listUsers(): T[] {
        return this.users;
    }

} // end of class UserManager