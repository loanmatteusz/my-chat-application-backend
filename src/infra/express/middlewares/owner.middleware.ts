import { NextFunction, Request, Response } from "express"
import { get } from "lodash";

const isOwner = (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.params;
        const currentUserId = String(get(request, 'identity._id'));

        if (!currentUserId || currentUserId.toString() !== id) {
            return response.sendStatus(403);
        }

        next();
    } catch (error: any) {
        console.log({ error });
        return response.sendStatus(400);
    }
}

export { isOwner }
