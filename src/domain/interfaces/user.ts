interface AuthenticationInterface {
    salt: string;
    password: string;
    sessionToken?: string;
}

export interface UserInterface {
    id?: string;
    username: string;
    email: string;
    authentication: AuthenticationInterface;
    createdAt?: Date;
}
