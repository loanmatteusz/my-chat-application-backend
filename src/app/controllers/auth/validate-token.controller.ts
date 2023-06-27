import { Request, Response } from "express";
import { container } from "tsyringe";

import { env } from "../../../main/config/env";

import { UserService } from "../../services/user.service";

class ValidateTokenController {
    public async handle(request: Request, response: Response) {
        try {
            const { token } = request.query;

            const userService = container.resolve(UserService);

            if (!token) {
                return response.sendStatus(400);
            }

            const user = await userService.getUserBySessionToken(token as string, '+authentication.sessionToken');

            if (!user) {
                return response.sendStatus(400);
            }

            response.cookie(env.authToken, user.authentication.sessionToken, { domain: env.appDomain, path: '/' });

            return response.status(200).json(user).end();
        } catch (err: any) {
            console.log({ error: err });
            return response.sendStatus(400);
        }
    }
}

export { ValidateTokenController }
