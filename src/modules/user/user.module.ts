import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';

const { EXPIRES } = process.env;

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            signOptions: { expiresIn: EXPIRES },
        }),
    ],
    providers: [UserService, AuthService],
    controllers: [UserController, AuthController],
})
export class UsersModule {}
