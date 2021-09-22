import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAdmin = this.usersRepository.findById(user_id)

    if (!userAdmin) {
      throw new Error("User user already admin")
    }

    const admin = this.usersRepository.turnAdmin(userAdmin)

    return admin
  }
}

export { TurnUserAdminUseCase };


/**
 *
 */