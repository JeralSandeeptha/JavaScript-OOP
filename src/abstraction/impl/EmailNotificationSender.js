"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailNotificationSender = /** @class */ (function () {
    function EmailNotificationSender() {
    }
    EmailNotificationSender.prototype.sendNotification = function (message) {
        console.log("".concat(message, " message is sending through Email as a notification"));
    };
    return EmailNotificationSender;
}());
exports.default = EmailNotificationSender;
