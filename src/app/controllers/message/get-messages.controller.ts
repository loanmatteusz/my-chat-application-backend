import { Request, Response } from "express";
import { container } from "tsyringe";

import { MessageService } from "../../services/message.service";

class GetMessagesController {
    public async handle(request: Request, response: Response) {
        const { chatId } = request.params;
        try {
            const messageService = container.resolve(MessageService);
            const messages = await messageService.getMessagesByChat(chatId);
            return response.status(200).json(messages);
        } catch (error: any) {
            return response.status(400).json(error);
        }
    }
}

export { GetMessagesController }
