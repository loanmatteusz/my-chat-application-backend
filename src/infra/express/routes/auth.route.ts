import { Router } from "express";
import { container } from "tsyringe";

import {
    RegisterController,
    SignInController,
    ValidateTokenController,
} from "../../../app/controllers";

const registerController = container.resolve(RegisterController);
const signInController = container.resolve(SignInController);
const validateTokenController = container.resolve(ValidateTokenController);

export default (router: Router): void => {
    router.post('/auth/register', registerController.handle);
    router.post('/auth/login', signInController.handle);
    router.get('/auth/validate', validateTokenController.handle);
}
