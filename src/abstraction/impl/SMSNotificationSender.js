"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SMSNotificationSender = /** @class */ (function () {
    function SMSNotificationSender() {
    }
    SMSNotificationSender.prototype.sendNotification = function (message) {
        console.log("".concat(message, " message is sending through SMS as a notification"));
    };
    return SMSNotificationSender;
}());
exports.default = SMSNotificationSender;
