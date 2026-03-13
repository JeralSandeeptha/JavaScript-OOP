import Admin from "./Admin.js";
import User from "./User.js";

// same method but different functionality
const user = new User('jeral', '1234');
user.userBehaviour();

// same method but different functionality
const admin = new Admin('silmi', '1234');
admin.userBehaviour();