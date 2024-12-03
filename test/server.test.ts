
import assert from 'assert';

import axiosClient from './axiosClient'; // Import the configured axiosClient
import { r, Connection } from 'rethinkdb-ts';
import { Server } from 'http';
import connectDB from '../src/database/db';
import app from '../src/server';  // Assuming the express app was exported in server.ts

let conn: Connection;
let server: Server; 

describe('API Endpoints', () => {
    const setup = async () => {
        conn = await connectDB();

        // Create database and table for testing if they do not exist
        await r.dbList().contains('test').do((databaseExists: any) => {
            return r.branch(
                databaseExists,
                { created: 0 },
                r.dbCreate('test')
            );
        }).run(conn);
        await r.db('test').tableList().contains('calculations').do((tableExists: any) => {
            return r.branch(
                tableExists,
                { created: 0 },
                r.db('test').tableCreate('calculations')
            );
        }).run(conn);

        // Ensure the table was created
        const tableExists = await r.db('test').tableList().contains('calculations').run(conn);
        assert.strictEqual(tableExists, true, 'Table `calculations` should exist.');

        server = app.listen(4000, () => {
            console.log('Test server running on http://localhost:4000');
        });
    };

    const cleanup = async () => {
        if (conn) {
            await r.db('test').table('calculations').delete().run(conn);
            await r.dbDrop('test').run(conn);
            await conn.close();
        }
        if (server) {
            server.close();
        }
    };

    it('GET /calculations should return an empty array', async () => {
        await setup();
        const response = await axiosClient.get('/calculations');
        if (response.status === 500)
            console.log(response.data)
        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(response.data, []);
        await cleanup();
    }, 10000);

    it('POST /calculations should create a new calculation', async () => {
        await setup();
        const newCalculation = { name: 'Test Calculation', value: 100, dateCreated: new Date() };
        const response = await axiosClient.post('/calculations', newCalculation);
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.inserted, 1);

        const getResponse = await axiosClient.get('/calculations');
        assert.strictEqual(getResponse.data.length, 1);
        assert.strictEqual(getResponse.data[0].name, 'Test Calculation');
        assert.strictEqual(getResponse.data[0].value, 100);
        await cleanup();
    }, 10000);

    it('PUT /calculations/:id should update a calculation', async () => {
        await setup();
        const newCalculation = { name: 'Test Calculation', value: 100, dateCreated: new Date() };
        const postResponse = await axiosClient.post('/calculations', newCalculation);
        const insertedId = postResponse.data.generated_keys[0];

        const updateData = { value: 200 };
        const putResponse = await axiosClient.put(`/calculations/${insertedId}`, updateData);
        assert.strictEqual(putResponse.status, 200);
        assert.strictEqual(putResponse.data.replaced, 1);

        const getResponse = await axiosClient.get('/calculations');
        assert.strictEqual(getResponse.data[0].value, 200);
        await cleanup();
    }, 10000); 

    it('DELETE /calculations/:id should delete a calculation', async () => {
        await setup();
        const newCalculation = { name: 'Test Calculation', value: 100, dateCreated: new Date() };
        const postResponse = await axiosClient.post('/calculations', newCalculation);
        const insertedId = postResponse.data.generated_keys[0];

        const deleteResponse = await axiosClient.delete(`/calculations/${insertedId}`);
        assert.strictEqual(deleteResponse.status,200);
        assert.strictEqual(deleteResponse.data.deleted, 1);

        const getResponse = await axiosClient.get('/calculations');
        assert.strictEqual(getResponse.data.length, 0);
        await cleanup();
    }, 10000);
});