import { UserInterface } from "../interfaces/user"

export interface UserServiceInterface {
    getUsers: () => Promise<UserInterface[]>
    getUserById: (id: string) => Promise<UserInterface | null>
    getUserByEmail: (email: string, select?: string) => Promise<UserInterface | any>
    getUserByName: (username: string) => Promise<UserInterface | null>
    getUserBySessionToken: (sessionToken: string, select?: string) => Promise<UserInterface | null>
    createUser: (user: UserInterface) => Promise<UserInterface | null>
    deleteUserById: (id: string) => Promise<UserInterface | null>
    updateUserById: (id: string, user: UserInterface) => Promise<UserInterface | null>
}
