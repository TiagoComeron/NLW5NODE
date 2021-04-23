import { MessagesRepository } from '../repositories/MessagesRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import { getCustomRepository, Repository } from 'typeorm';
import { Message } from '../entities/Message';

interface ISettingsService {
    admin_id?:string; // Opcional a chegada desse parâmetro
    text:string;
    user_id:string;
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create( { text, admin_id, user_id } : ISettingsService ){

        if(text.length >= 255)
            throw new Error("Envie apenas mensagens com menores que 255 caracteres.")

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);

        return message
    }

    async listByUser( user_id:string ){
        const list = this.messagesRepository.find({user_id});

        console.log(list)

        const email = (await getCustomRepository(UsersRepository).findOne(user_id)).email
        
        return {list, email}
    }
}

export{MessagesService}