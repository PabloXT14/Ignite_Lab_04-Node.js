export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  // PERMITE ALTERAR O CONTEÚDO DO ATRIBUTO <content> DIRETAMENTE PELO .content
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  // PERMITE PEGAR O CONTEÚDO DO ATRIBUTO <content> DIRETAMENTE PELO .content
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }

    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set category(category: string) {
    if (category.length === 0) {
      throw new Error();
    }

    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
