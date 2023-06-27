import { Request, Response } from "express";
import { container } from "tsyringe";

import { env } from "../../../main/config/env";

import { UserService } from "../../services/user.service";
import { authentication, random, twentyFourHours } from "../../helpers";

class SignInController {
    public async handle(request: Request, response: Response) {
        try {
            const { email, password } = request.body;

            const userService = container.resolve(UserService);

            if (!email || !password) {
                return response.sendStatus(400);
            }

            const user = await userService.getUserByEmail(email, '+authentication.salt +authentication.password');

            if (!user) {
                return response.sendStatus(400);
            }

            const expectedHash = authentication(user.authentication.salt, password);
            if (user.authentication.password !== expectedHash) {
                return response.sendStatus(403);
            }

            const salt = random();
            user.authentication.sessionToken = authentication(salt, user._id.toString());
            await user.save();

            // response.cookie(env.authToken, user.authentication.sessionToken, {
            //     domain: env.appDomain,
            //     path: '/',
            //     expires: twentyFourHours(),
            // });

            return response.status(200).json(user).end();
        } catch (err: any) {
            console.log({ error: err });
            return response.sendStatus(400);
        }
    }
}

export { SignInController }
