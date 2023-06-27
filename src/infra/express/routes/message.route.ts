import { Router } from "express";

import { isAuthenticated } from "../middlewares/auth.middleware";
import {
    CreateMessageController,
    GetMessagesController
} from "../../../app/controllers";
import { container } from "tsyringe";

const createMessageController = container.resolve(CreateMessageController);
const getMessagesController = container.resolve(GetMessagesController);

export default (router: Router): void => {
    router.post('/message', isAuthenticated, createMessageController.handle);
    router.get('/message/:chatId', isAuthenticated, getMessagesController.handle);
}
