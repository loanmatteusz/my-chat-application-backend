import "reflect-metadata";

import { env } from './config/env';
import { app } from '../infra/express';

export class Server {
    static async bootstrap() {
        const PORT = env.port;
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    }
}

Server.bootstrap();
