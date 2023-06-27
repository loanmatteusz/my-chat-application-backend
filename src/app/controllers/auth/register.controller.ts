import { Request, Response } from "express";
import { container } from "tsyringe";

import { authentication, random } from "../../helpers";
import { UserService } from "../../services/user.service";

class RegisterController {
    public async handle(request: Request, response: Response) {
        try {
            const { username, email, password } = request.body;

            const userService = container.resolve(UserService);

            if (!username || !email || !password) {
                return response.sendStatus(400);
            }

            const userExists = await userService.getUserByEmail(email);
            if (userExists) {
                return response.sendStatus(400);
            }

            const salt = random();
            const user = await userService.createUser({
                username,
                email,
                authentication: {
                    salt,
                    password: authentication(salt, password),
                }
            });

            return response.status(200).json(user).end();
        } catch (err: any) {
            console.log({ error: err });
            return response.sendStatus(400);
        }
    }
}

export { RegisterController }
