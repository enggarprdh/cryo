require('../connection');
const { Client } = require('pg');

class ContactUs {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.client = new Client({
            user: process.env.PG_USER,
            host: process.env.PG_HOST,
            database: process.env.PG_DATABASE,
            password: process.env.PG_PASSWORD,
            port: process.env.PG_PORT,
        }),
        this.client.connect();
    }
    
    save = async () => {
        const query = {
        text: 'INSERT INTO contactus(name, email, subject, message) VALUES($1, $2, $3, $4)',
        values: [this.name, this.email, this.subject, this.message],
        };

        const result = await this.client.query(query);
    
        return result.rows[0];
    }
}

module.exports = ContactUs;