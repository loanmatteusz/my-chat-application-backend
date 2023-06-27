import '../database';
import cors from 'cors';
import express from "express";

import { setupMiddleware } from "./middleware";
import { setupRoutes } from "./routes";

const app = express();

setupMiddleware(app);
setupRoutes(app);

export { app };
