import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SendNotification } from '../../../../src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return {
      notification: {
        id: notification.id,
        content: notification.content,
        category: notification.content.value,
        recipientId: notification.recipientId,
      },
    };
  }

  @Get()
  async index() {
    const prisma = new PrismaService();
    const notifications = await prisma.notifications.findMany();

    return notifications;
  }
}
