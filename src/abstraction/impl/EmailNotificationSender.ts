import NotificationSender from "./NotificationSender";

class EmailNotificationSender implements NotificationSender {

    sendNotification(message: string): void {
        console.log(`${message} message is sending through Email as a notification`);
    }
}

export default EmailNotificationSender;
