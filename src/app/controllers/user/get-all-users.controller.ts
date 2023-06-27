import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserService } from "../../services/user.service";

class GetAllUsersController {
    public async handle(request: Request, response: Response) {
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getUsers();
            return response.status(200).json(users);
        } catch (error: any) {
            console.log({ error });
            return response.sendStatus(400);
        }
    }
}

export { GetAllUsersController }
