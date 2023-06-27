import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserService } from "../../services/user.service";

class GetUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const userService = container.resolve(UserService);
            const user = await userService.getUserById(id);
            return response.status(200).json(user);
        } catch (error: any) {
            console.log({ error });
            return response.sendStatus(400);
        }
    }
}

export { GetUserController }
