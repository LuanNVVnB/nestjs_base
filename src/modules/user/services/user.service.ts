import { HttpException, Injectable } from '@nestjs/common';
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

    async getUser(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async validateUser(username: string, email: string): Promise<boolean> {
        const userFind = await this.usersRepository.findOne({
            where: [{ username: username }, { email: email }],
        });
        if (userFind) return true;
        return false;
    }

    async createUser(user: UserCreate): Promise<User> {
        if (await this.validateUser(user.username, user.email))
            throw new HttpException(`User ${user.username} not fund`, 403);

        user.password = await bcrypt.hash(user.password, +SALT_ROUNDS);

        return await this.usersRepository.save(user);
    }
}
