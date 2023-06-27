import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserService } from "../../services/user.service";

class UpdateUserController {
    public async handle(request: Request, response: Response) {
        const { id } = request.params;
        const data = request.body;
        try {
            const userService = container.resolve(UserService);
            await userService.updateUserById(id, { ...data });
            return response.status(200).send();
        } catch (error: any) {
            console.log({ error });
            return response.sendStatus(400);
        }
    }
}

export { UpdateUserController }
