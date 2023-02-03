import 'reflect-metadata';
import 'dotenv/config';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{js,ts}');
  const migrationsPath: string = path.join(
    __dirname,
    './migrations/**.{js,ts}'
  );

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
