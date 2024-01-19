import fs from 'fs';
import path from 'path';
import { createConnection, Connection } from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import { exec } from 'child_process';

const passwordDb = ""; // TODO - YOUR PASSWORD

async function setupDatabase() {

    // Create config/default.json
    const configDir = path.join(__dirname, 'config');
    const configFile = path.join(configDir, 'default.json');
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir);
    }
    if (!fs.existsSync(configFile)) {
        const config = {
            "mysql": {
                "database": "client_manager_api",
                "user": "root",
                "password": passwordDb,
                "host": "127.0.0.1"
            },
            "api": {
                "port": 3000
            },
            "jwt": {
                "key_secret": "JWT_PROJECT_TOKEN_CLIENT_MANAGER"
            }
        };
        fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
    }

    // Connect and create MySQL db
    let connection: Connection | null = null;
    try {
        connection = await createConnection({
            host: 'localhost',
            user: 'root',
            password: passwordDb,
        });

        await connection.query('CREATE DATABASE IF NOT EXISTS client_manager_api');
        console.log('Banco de dados criado');
    } catch (err) {
        console.error('Erro ao criar o banco de dados:', err);
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

setupDatabase().then(() => {
    exec('ts-node api/db/create_tables.ts', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro ao executar o script: ${stderr}`);
            return;
        }
        console.log(`Resultado do script: ${stdout}`);
    });
});