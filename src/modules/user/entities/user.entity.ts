import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../dtos/user.dto';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../../baseModules/entity.base';

export interface IUser {
    id: string;
    username: string;
    password: string;
    age: number;
    role: UserRole;
    email: string;
}

@Entity()
export class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    @Exclude()
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
