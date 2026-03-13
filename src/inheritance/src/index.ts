import Admin from "./Admin.js";
import User from "./User.js";

// normal user
const normalUser = new User('jeral', '1234');
normalUser.normalbehaviour();

// admin user
const adminUser = new Admin('silmi', '1234');
adminUser.normalbehaviour();
adminUser.adminbehaviour();