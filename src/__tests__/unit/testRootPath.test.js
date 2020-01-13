const request = require('supertest');
const express = require('express');
const app = express();
app.use(require('../../routes/router'));

describe('Testing my root path api', () =>{
  it('should return Json for "/" path', async () => {
    return await request(app)
    .get('/')
    .expect('Content-Type', /json/)
  });

  it('should return status code 200 for "/" path', async () => {
    return await request(app)
    .get('/')
    .expect(200);
  });

  it('should return the right body message from "/" path', async () => {
    response = await request(app)
                    .get('/');
    expect(response.body.author).toBe('Lucas Marinzeck');
    expect(response.body.version).toBe('v0.0.01');
    expect(response.body.repo).toBe('TODO');
    expect(response.body.description).toBe('A NodeJs Rest API for study');
  });
});