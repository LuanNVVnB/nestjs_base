import path = require('path');
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { User } from './modules/user/entities/user.entity';

config();

const { HOST, PORT_DATA_BASE, USERNAME_DATA_BASE, PASSWORD_DATA_BASE, DATABASE_DATA_BASE } = process.env;

export const configDB: DataSourceOptions = {
    type: 'postgres',
    host: HOST,
    port: Number(PORT_DATA_BASE),
    username: USERNAME_DATA_BASE,
    password: PASSWORD_DATA_BASE,
    database: DATABASE_DATA_BASE,
    synchronize: false,
    logging: true,
    // entities: [path.join(__dirname + '/modules/**/entities/*.entity.ts')],
    entities: [User],
    migrations: [path.join(__dirname + '/migrations/*.ts')],
    subscribers: [],
};

export default new DataSource(configDB);
