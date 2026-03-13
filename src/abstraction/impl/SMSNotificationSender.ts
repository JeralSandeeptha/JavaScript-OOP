import NotificationSender from "./NotificationSender";

class SMSNotificationSender implements NotificationSender {

    sendNotification(message: string): void {
        console.log(`${message} message is sending through SMS as a notification`);
    }
}

export default SMSNotificationSender;
