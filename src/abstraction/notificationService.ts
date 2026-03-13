import NotificationSender from './impl/NotificationSender';
import SMSNotificationSender from './impl/SMSNotificationSender';
import EmailNotificationSender from './impl/EmailNotificationSender';

const sendNotificationForUser = (messageType: NotificationSender, message: string) => {
    messageType.sendNotification(message);
}

sendNotificationForUser(new SMSNotificationSender, 'Im comming thorugh SMS');
sendNotificationForUser(new EmailNotificationSender, 'Im comming thorugh Email');