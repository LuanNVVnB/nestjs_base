import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { configDB } from './typeorm.config';
import { UsersModule } from './modules/user/user.module';

@Module({
    imports: [TypeOrmModule.forRoot(configDB), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
