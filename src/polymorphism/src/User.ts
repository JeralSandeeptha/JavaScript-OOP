import SystemUser from "./SystemUser.js";

class User extends SystemUser {

    constructor(username: string, password: string) {
        super(username, password);
    }

    // changed the parent method functionality
    userBehaviour(): void {
        console.log(`User is performing normal user behaviour`);
    }
}

export default User;
