import SystemUser from "./SystemUser.js";

class Admin extends SystemUser {

    constructor(username: string, password: string) {
        super(username, password);
    }

    // changed the parent method functionality
    userBehaviour(): void {
        console.log(`Admin is performing admin behaviour`);
    }
}

export default Admin;
