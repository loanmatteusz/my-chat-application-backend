import { UserInterface } from "../../domain/interfaces/user";
import { UserModel } from "../../domain/models/user.model";
import { UserServiceInterface } from "../../domain/services/user-service.interface";

class UserService implements UserServiceInterface {
    public async getUsers(): Promise<UserInterface[]> {
        return UserModel.find();
    }

    public async getUserById(id: string): Promise<UserInterface | null> {
        return UserModel.findById(id);
    }

    public async getUserByEmail(email: string, select?: string): Promise<UserInterface | any> {
        return UserModel.findOne({ email })
            .select(select as string);
    }

    public async getUserByName(username: string): Promise<UserInterface | null> {
        return UserModel.findOne({ username });
    }

    public async getUserBySessionToken(sessionToken: string, select?: string): Promise<UserInterface | null> {
        return UserModel.findOne({
            'authentication.sessionToken': sessionToken,
        })
        .select(select as string);
    }

    public async createUser(user: UserInterface): Promise<UserInterface> {
        return new UserModel(user)
            .save()
            .then((user) => user.toObject());
    }

    public async deleteUserById(id: string): Promise<UserInterface | null> {
        return UserModel.findOneAndDelete({ _id: id });
    }

    public async updateUserById(id: string, user: UserInterface): Promise<UserInterface | null> {
        return UserModel.findByIdAndUpdate(id, user);
    }
}

export { UserService }
