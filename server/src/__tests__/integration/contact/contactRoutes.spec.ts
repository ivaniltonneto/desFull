import { DataSource } from 'typeorm';
import AppDataSource from '../../../data-source';
import request from 'supertest';
import app from '../../../app';
import { mockedContact, mockedUser, mockedUserLogin } from '../../mocks';

describe('/contact', () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });

    await request(app).post('/users').send(mockedUser);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test('POST /contact = Must be able to create a contact', async () => {
    const loginUser = await request(app).post('/login').send(mockedUserLogin);
    const contact = await request(app)
      .post('/contact')
      .set('Authorization', `Bearer ${loginUser.body.token}`)
      .send(mockedContact);

    expect(contact.body).toHaveProperty('id');
    expect(contact.body).toHaveProperty('full_name');
    expect(contact.body).toHaveProperty('email');
    expect(contact.body).toHaveProperty('phone');
    expect(contact.body).toHaveProperty('createdAt');
  });

  test('POST /contact = should not be able to create contact without authentication', async () => {
    const response = await request(app).post('/contact').send(mockedContact);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });
});
