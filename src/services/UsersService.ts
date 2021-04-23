import { UsersRepository } from '../repositories/UsersRepository';
import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersService {
    private usersRepository : Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create( email:string ){
        //Select basico -> .get() no groovy
        const usersExists = await this.usersRepository.findOne({
            email
        });

        if(usersExists)
            return usersExists

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user
    }
}

export{UsersService}