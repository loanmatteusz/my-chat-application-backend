import { Request, Response } from "express";
import { container } from "tsyringe";

import { MessageService } from "../../services/message.service";

class CreateMessageController {
    public async handle(request: Request, response: Response) {
        const { chatId, senderId, text } = request.body;
        const message = {
            chatId,
            senderId,
            text,
        };
        try {
            const messageService = container.resolve(MessageService);
            const result = await messageService.createMessage(message);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json(error);
        }
    }
}

export { CreateMessageController }
