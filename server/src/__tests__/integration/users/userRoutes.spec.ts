import { DataSource } from 'typeorm';
import AppDataSource from '../../../data-source';
import request from 'supertest';
import app from '../../../app';
import {
  mockedUser,
  mockedUserWithoutPassword,
  mockedUserLogin,
} from '../../mocks';

describe('/users', () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test('POST /users -  Must be able to create a user', async () => {
    const response = await request(app).post('/users').send(mockedUser);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('full_name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('phone');
    expect(response.body).toHaveProperty('createdAt');

    expect(response.body).not.toHaveProperty('password');
    expect(response.body.full_name).toEqual('User');
    expect(response.body.email).toEqual('user@mail.com');
    expect(response.status).toBe(201);
  });

  test('POST /users -  should not be able to create a user that already exists', async () => {
    const response = await request(app).post('/users').send(mockedUser);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(400);
  });

  test('POST /users -  should not be able to create a user with missing fields', async () => {
    const response = await request(app)
      .post('/users')
      .send(mockedUserWithoutPassword);

    expect(response.body).toMatchObject({
      message: 'password is a required field',
    });
    expect(response.status).toBe(400);
  });

  test('GET /users/profile - should be abe to list a user', async () => {
    await request(app).post('/users/').send(mockedUser);
    const loginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${loginResponse.body.token}`);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('full_name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('phone');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).not.toHaveProperty('password');

    expect(response.status).toBe(200);
  });

  test('GET /users/profile - should be abe to list a user', async () => {
    const response = await request(app).get('/users/profile');

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('GET /users/profile - should not be able to list users with invalid authentication', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${123}`);
    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('GET/ users/profile - should not be able to list an user without authentication', async () => {
    const user = await request(app).get('/users/profile');
    const response = await request(app).get(`/users/profile`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /users/profile - shoud be able to update a user', async () => {
    const newValues = { full_name: 'Kenzinho', email: 'kenzie@mail.com' };

    const loginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);
    const token = `Bearer ${loginResponse.body.token}`;

    const response = await request(app)
      .patch('/users/profile')
      .set('Authorization', token)
      .send(newValues);

    const userUpdated = await request(app)
      .get('/users/profile')
      .set('Authorization', token);

    expect(response.status).toBe(200);
    expect(userUpdated.body.full_name).toEqual('Kenzinho');
    expect(userUpdated.body).not.toHaveProperty('password');
  });

  test('PATCH /users/profile -  should not be able to update user without authentication', async () => {
    const loginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);

    const userToken = `Bearer ${loginResponse.body.token}`;

    const response = await request(app)
      .patch(`/users/profile`)
      .set('Authorization', userToken);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('DELETE /users/:id -  Must be able to soft delete user', async () => {
    await request(app).post('/users').send(mockedUser);

    const loginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);

    const response = await request(app)
      .delete(`/users/profile`)
      .set('Authorization', `Bearer ${loginResponse.body.token}`);

    expect(response.status).toBe(204);
  });

  test('DELETE /users/profile -  should not be able to delete user without authentication', async () => {
    const loginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);

    const userToken = `Bearer ${loginResponse.body.token}`;

    const response = await request(app)
      .delete(`/users/profile`)
      .set('Authorization', userToken);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });
});
