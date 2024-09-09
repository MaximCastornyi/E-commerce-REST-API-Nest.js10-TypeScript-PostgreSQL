import { DataSource, DataSourceOptions } from 'typeorm';
import {config} from 'dotenv';

config()

export const dataSourceOptions: DataSourceOptions={
    // type: 'postgres',
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: '08081975maxim',
    // database: 'bazarapi',
    // synchronize: false,
    // logging: false,
    // entities: [],
    // migrations: [],
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    synchronize: false,
    logging: false,
}

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();

export default dataSource;