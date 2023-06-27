import { ChatInterface } from "../../domain/interfaces/chat";
import { ChatModel } from "../../domain/models/chat.model";
import { ChatServiceInterface } from "../../domain/services/chat-service.interface";

class ChatService implements ChatServiceInterface {
    public async createChat({ members }: ChatInterface): Promise<ChatInterface> {
        return new ChatModel({ members })
            .save()
            .then((chat) => chat.toObject());
    }

    public async findChat(firstId: string, secondId: string): Promise<ChatInterface | any> { // for now
        const chat = await ChatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        return chat;
    }

    public async getChatsByUser(id: string): Promise<ChatInterface[]> {
        const chats = await ChatModel.find({
            members: {
                $in: [id],
            }
        });
        return chats;
    }
}

export { ChatService }
