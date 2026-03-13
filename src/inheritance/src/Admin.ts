import SystemUser from "./SystemUser.js";

class Admin extends SystemUser{
    private role: string = "Admin";

    constructor(username: string, password: string) {
        super(username, password);
    }

    adminbehaviour() {
        console.log("Admin behaviour");
    }
}

export default Admin;
