import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserService } from "../../services/user.service";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const userService = container.resolve(UserService);
            await userService.deleteUserById(id);
            return response.status(200).send();
        } catch (error: any) {
            console.log({ error });
            return response.sendStatus(400);
        }
    }
}

export { DeleteUserController }
