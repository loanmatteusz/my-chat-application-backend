import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { merge } from "lodash";

import { UserService } from "../../../app/services/user.service";

const isAuthenticated = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const sessionToken = request.headers.authorization;
        const userService = container.resolve(UserService);

        if (!sessionToken) {
            return response.sendStatus(400);
        }

        const userExists = await userService.getUserBySessionToken(sessionToken);
        if (!userExists) {
            return response.sendStatus(403);
        }

        merge(request, { identity: userExists });

        return next();
    } catch (error: any) {
        console.log({ error });
        return response.sendStatus(400);
    }
}

export { isAuthenticated }
