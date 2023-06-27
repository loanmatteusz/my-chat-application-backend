import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChatService } from "../../services/chat.service";

class FindChatController {
    public async handle(request: Request, response: Response) {
        const { firstId, secondId } = request.params;
        try {
            const chatService = container.resolve(ChatService);
            const chat = await chatService.findChat(firstId, secondId);
            return response.status(200).json(chat)
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}

export { FindChatController }
