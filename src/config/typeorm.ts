import { registerAs } from '@nestjs/config'
import { config as dotenvConfig } from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'
dotenvConfig({ path: '.env.development' })

const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    logging: true,
    synchronize: true
}

console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);


export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions)