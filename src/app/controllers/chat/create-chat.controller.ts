import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChatService } from "../../services/chat.service";

class CreateChatController {
    public async handle(request: Request, response: Response) {
        const { senderId, receiverId } = request.body;

        try {
            const chatService = container.resolve(ChatService);
            const result = await chatService.createChat({
                members: [senderId, receiverId],
            });
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json(error);
        }
    }
}

export { CreateChatController }
