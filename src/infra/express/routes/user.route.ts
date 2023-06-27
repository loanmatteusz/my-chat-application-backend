import { Router } from "express";
import { container } from "tsyringe";

import {
    GetAllUsersController,
    GetUserController,
    UpdateUserController,
    DeleteUserController
} from "../../../app/controllers";

import { isAuthenticated } from "../middlewares/auth.middleware";
import { isOwner } from "../middlewares/owner.middleware";

const getAllUsersController = container.resolve(GetAllUsersController);
const getUserController = container.resolve(GetUserController);
const updateUserController = container.resolve(UpdateUserController);
const deleteUserController = container.resolve(DeleteUserController);

export default (router: Router): void => {
    router.get('/users', isAuthenticated, getAllUsersController.handle);
    router.get('/users/:id', isAuthenticated, getUserController.handle);
    router.put('/users/:id', isAuthenticated, isOwner, updateUserController.handle);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUserController.handle);
}
