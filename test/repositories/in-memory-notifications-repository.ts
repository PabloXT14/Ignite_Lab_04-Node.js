import { Notification } from '../../src/application/entities/notifications';
import { NotificationRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
