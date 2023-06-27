import { MessageInterface } from "../interfaces/message";

export interface MessageServiceInterface {
    createMessage: (message: MessageInterface) => Promise<MessageInterface>;
    getMessagesByChat: (id: string) => Promise<MessageInterface[]>;
}
