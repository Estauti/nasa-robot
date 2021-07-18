import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export function createTypeOrmProdConfig(): TypeOrmModuleOptions {
 return {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: "nasa_robot",
    password: "nasa_robot",
    database: "nasa_robot",
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, '.', '**', 'migrations', '*.ts')],
    migrationsRun: true,
    synchronize: true,
    logging: true,
    logger: "advanced-console",
  };
}