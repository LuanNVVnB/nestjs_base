import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserCreate } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
const { SALT_ROUNDS } = process.env;
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async validateUser(username: string, email: string): Promise<boolean> {
        const userFind = await this.usersRepository.findOne({
            where: [{ username: username }, { email: email }],
        });
        return userFind ? true : false;
    }

    async createUser(user: UserCreate): Promise<User> {
        if (this.validateUser(user.username, user.email)) throw new Error(`User ${user.username} already exists`);

        user.password = await bcrypt.hash(user.password, +SALT_ROUNDS);

        return await this.usersRepository.save(user);
    }
}
