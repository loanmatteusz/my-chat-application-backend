import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChatService } from "../../services/chat.service";

class GetUserChatsController {
    public async handle(request: Request, response: Response) {
        const { userId } = request.params;
        try {
            const chatService = container.resolve(ChatService);
            const chats = await chatService.getChatsByUser(userId);
            return response.status(200).json(chats);
        } catch (error: any) {
            console.error({ error });
            return response.status(400).json({ error });
        }
    }
}

export { GetUserChatsController }
