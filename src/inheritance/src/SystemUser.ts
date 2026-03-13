class SystemUser {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.password = password;
        this.username = username;
    }

    normalbehaviour() {
        console.log("Normal behaviour");
    }
}

export default SystemUser;
