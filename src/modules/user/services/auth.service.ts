import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserCreate, UserLogin } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserService } from './user.service';
import { InfoToken, UserInfo } from '../dtos/token.dto';
import { JwtService } from '@nestjs/jwt';

const { SIGNINGKEY, REFESH_SIGNINGKEY } = process.env;

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateLogin(username: string): Promise<User | null> {
        return await this.usersRepository.findOne({
            where: [{ username: username }, { email: username }],
        });
    }

    createToken(infoToken: InfoToken, signKey: string): string {
        return this.jwtService.sign(infoToken, {
            secret: signKey,
        });
    }

    async registerUser(user: UserCreate): Promise<UserInfo> {
        const userCreated = await this.userService.createUser(user);

        return {
            accessToken: this.createToken(
                {
                    id: userCreated.id,
                    username: userCreated.username,
                    email: userCreated.email,
                },
                SIGNINGKEY as string
            ),
            refreshToken: this.createToken(
                {
                    id: userCreated.id,
                    username: userCreated.username,
                    email: userCreated.email,
                },
                REFESH_SIGNINGKEY as string
            ),
        };
    }

    async login(user: UserLogin): Promise<UserInfo> {
        const userFind = await this.validateLogin(user.username);
        if (!userFind) throw new Error(`User ${user.username} not fund`);

        const checkPassword = await bcrypt.compare(user.password, userFind.password);

        if (!checkPassword) throw new Error(`password error, try again`);

        return {
            accessToken: this.createToken(
                {
                    id: userFind.id,
                    username: userFind.username,
                    email: userFind.email,
                },
                SIGNINGKEY as string
            ),
            refreshToken: this.createToken(
                {
                    id: userFind.id,
                    username: userFind.username,
                    email: userFind.email,
                },
                REFESH_SIGNINGKEY as string
            ),
        };
    }
}
