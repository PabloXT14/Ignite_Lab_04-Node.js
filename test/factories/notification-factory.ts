import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notifications';

// TIPANDO CAMPOS DE NOTIFICATION PARA QUE POSSAMOS SOBRE POLOS, TORNANDO-OS TODOS CAMPOS OPCIONAIS
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-x',
    ...override, // preenche caso o usuário passe algo
  });
}
