import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notificatio = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notificatio) {
      throw new NotificationNotFound();
    }

    notificatio.read();

    await this.notificationsRepository.save(notificatio);
  }
}
