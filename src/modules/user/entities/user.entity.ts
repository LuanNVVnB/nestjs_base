import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../dtos/user.dto';

export interface IUser {
    id: string;
    username: string;
    password: string;
    age: number;
    role: UserRole;
    email: string;
}

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GHOST,
    })
    role: UserRole;

    @Column()
    email: string;
}
