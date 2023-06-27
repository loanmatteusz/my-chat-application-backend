import 'dotenv/config';

interface Env {
    port: number;
    authToken: string;
    secret: string;
    databaseUrl: string;
    appDomain: string;
}

export const env: Env = {
    port: Number(process.env.PORT) || 3000,
    authToken: process.env.AUTH_TOKEN as string,
    secret: process.env.SECRET as string,
    databaseUrl: process.env.DATABASE_URL as string,
    appDomain: process.env.APP_DOMAIN as string,
}
