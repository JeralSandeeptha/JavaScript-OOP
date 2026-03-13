"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SMSNotificationSender_1 = require("./impl/SMSNotificationSender");
var EmailNotificationSender_1 = require("./impl/EmailNotificationSender");
var sendNotificationForUser = function (messageType, message) {
    messageType.sendNotification(message);
};
sendNotificationForUser(new SMSNotificationSender_1.default, 'Im comming thorugh SMS');
sendNotificationForUser(new EmailNotificationSender_1.default, 'Im comming thorugh Email');
