import dotenv from 'dotenv';
dotenv.config();
const dbConfig = {
    HOST: process.env.DB_HOST,
    // PORT: process.env.DB_PORT,
    DB: process.env.DB,
    USER: process.env.DB_USER,
    PWD: process.env.DB_PWD
};

export default dbConfig;