import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany } from 'typeorm'
import { User } from "./User";

import { v4 as uuid } from 'uuid' 

@Entity('messages')
class Message {
    @PrimaryColumn()
    id:string;

    @Column()
    text:string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne( () => User)
    user:User
    
    @Column()
    user_id:string;
    
    @Column()
    admin_id:string;

    @CreateDateColumn()
    created_at:Date;

    constructor() {
        if(!this.id)
            this.id = uuid()
    }
}

export { Message }