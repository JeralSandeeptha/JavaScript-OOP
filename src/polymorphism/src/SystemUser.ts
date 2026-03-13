class SystemUser {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.password = password;
        this.username = username;
    }

    userBehaviour() {
        console.log("User is performing user behaviour");
    }
}

export default SystemUser;
