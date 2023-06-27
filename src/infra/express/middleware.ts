import { Express, json } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

export const setupMiddleware = (app: Express): void => {
	app.use(cors({
		origin: '*',
		credentials: true,
	}));
	app.use(json());
	app.use(cookieParser());
};
