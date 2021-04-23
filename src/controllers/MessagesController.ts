import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService';



class MessagesController {
    async create(req:Request, res:Response) {
        const { text, admin_id, user_id } = req.body;

        const messagesService = new MessagesService();

        try {
            const messages = await messagesService.create({
                text,
                admin_id,
                user_id
            });

            res.json( messages )
        } catch (error) {
            res.status(400).json({erro:error.message})
        }
    }

    async showByUser(req:Request, res:Response) {
        const { id } = req.params;

        const messagesService = new MessagesService();

        try {
            const {list, email} = await messagesService.listByUser(id);
            console.log(list)
            // return res.json({
            //     email:email,
            //     list: [list]})
            return res.json({
                email:email,
                list:[(await list)]
            }) 
        } catch (error) {
            return res.status(400).json({erro:error.message})
        }
    }
}

export { MessagesController }