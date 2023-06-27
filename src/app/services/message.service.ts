import { MessageInterface } from "../../domain/interfaces/message";
import { MessageModel } from "../../domain/models/message.model";
import { MessageServiceInterface } from "../../domain/services/message-service.interface";

class MessageService implements MessageServiceInterface {
    public async createMessage(message: MessageInterface): Promise<MessageInterface> {
        return new MessageModel(message)
            .save()
            .then((message) => message.toObject());
    }

    public async getMessagesByChat(id: string): Promise<MessageInterface[]> {
        const messages = await MessageModel.find({ chatId: id });
        return messages;
    }
}

export { MessageService }
