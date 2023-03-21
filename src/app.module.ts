import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import path = require('path');

const { HOST, PORT_DATA_BASE, USERNAME_DATA_BASE, PASSWORD_DATA_BASE, DATABASE_DATA_BASE } = process.env;

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: HOST,
            port: Number(PORT_DATA_BASE),
            username: USERNAME_DATA_BASE,
            password: PASSWORD_DATA_BASE,
            database: DATABASE_DATA_BASE,
            synchronize: false,
            logging: true,
            entities: [path.join(__dirname + '/../modules/**/*.entity.ts')],
            migrations: [path.join(__dirname + '/../migrations/*.ts')],
            subscribers: [],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
