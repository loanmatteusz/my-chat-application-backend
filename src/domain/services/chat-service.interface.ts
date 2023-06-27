import { ChatInterface } from "../interfaces/chat";

export interface ChatServiceInterface {
    createChat: ({ members }: ChatInterface) => Promise<ChatInterface>;
    findChat: (firstId: string, secondId: string) => Promise<ChatInterface | any>;
    getChatsByUser: (id: string) => Promise<ChatInterface[]>;
}
