import SystemUser from "./SystemUser.js";

class User extends SystemUser{
    private role: string = "User";

    constructor(username: string, password: string) {
        super(username, password);
    }
}

export default User;