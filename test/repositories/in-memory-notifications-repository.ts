import { Notification } from '@application/entities/notifications';
import { NotificationRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
