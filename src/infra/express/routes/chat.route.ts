import { Router } from "express";
import { container } from "tsyringe";

import { isAuthenticated } from "../middlewares/auth.middleware";

import {
    CreateChatController,
    GetUserChatsController,
    FindChatController,
} from "../../../app/controllers";

const createChatController = container.resolve(CreateChatController);
const getUserChatsController = container.resolve(GetUserChatsController);
const findChatController = container.resolve(FindChatController);

export default (router: Router): void => {
    router.post('/chat', isAuthenticated, createChatController.handle);
    router.get('/chat/:userId', isAuthenticated, getUserChatsController.handle);
    router.get('/chat/find/:firstId/:secondId', isAuthenticated, findChatController.handle);
}
