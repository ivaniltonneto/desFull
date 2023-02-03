# desFull

## Initializing the project

#

<br>
<h1><b>1) .ENV </b></h1>
<br>

### After cloning the repository to your machine, you need to add a file called .env and put the following information in it

```
SECRET_KEY=your_secret_key

POSTGRES_HOST=localhost
POSTGRES_USER=your_user_postgres
POSTGRES_PASSWORD=your_password_postgres
POSTGRES_PORT=your_port_postgres
POSTGRES_DB=your_database_postgres
```

<br>
<h1><b>1.2) Commands </b></h1>
<br>

### installing dependencies `yarn`

### running migrations `yarn typeorm migration:run -d src/data-source.ts`

### If so far everything has gone well, run the `yarn dev` command to start the server

---

<br>
<h1><b>2) 
API routes </b></h1>
<br>

<h2 align ='center'> Create user </h2>

`POST /user`

#

### Required route data -> "full_name, email, password e phone".

```json
{
  "full_name": "teste",
  "email": "teste@teste.com",
  "password": "123456",
  "phone": "02518882204"
}
```

`ANSWER FORMAT - STATUS 201 CREATED`

```json
{
  "full_name": "teste",
  "email": "teste@teste.com",
  "phone": "02518882204",
  "id": "7036002c-14as-4a7c-9197-6fa9343a97ca",
  "createdAt": "2023-02-30T21:19:30.616Z"
}
```

<h2 align ='center'> Possible errors </h2>

If you already have an email registered

`ANSWER FORMAT - STATUS 400 BAD REQUEST`

```json
{
  "message": "Email Already Exists"
}
```

if you have not filled in the mandatory data -> full_name, email, password ou phone

`ANSWER FORMAT - STATUS 400 BAD REQUEST`

```json
{
  "message": "full_name is a required field"
}
```

#

<h2 align ='center'> Login user </h2>

`POST /login`

#

```json
{
  "email": "teste@teste.com",
  "password": "123456"
}
```

`ANSWER FORMAT - STATUS 201 CREATED`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlnb3IzQGdtYWlsLmNvbSIsImlhdCI6MTY2NzMwNjg2MywiZXhwIjoxNjY3MzkzMjYzLCJzdWIiOiI2MDEwZGFlNy00NmM3LTRkMDMtYWEyYS1mZmY0OGVlZDgyNDQifQ.ILJAeWbdpucEqsdWow198hFFKJ6u3be2hTLnVp3kI2E"
}
```

<h2 align ='center'> Possible errors </h2>

If the email or password is wrong

`ANSWER FORMAT - STATUS 403 FORBIDDEN`

```json
{
  "message": "Wrong email/password"
}
```

#

<h2 align ='center'> List user </h2>

`GET /users/profile`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### Returns only your own user.

`ANSWER FORMAT - STATUS 200 OK`

```json
{
  "full_name": "teste",
  "email": "teste@teste.com",
  "phone": "02518882204",
  "id": "7036002c-14as-4a7c-9197-6fa9343a97ca",
  "createdAt": "2023-02-30T21:19:30.616Z"
}
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Update user information </h2>

`PATCH /users/profile`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### This route can only be updated by the user himself. You must enter name, email or phone to update any of these fields

```json
{
  "full_name": "Usuário"
}
```

`ANSWER FORMAT - STATUS 200 OK`

```json
{
  "message": "User updated"
}
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Delete a user </h2>

`DELETE /users/profile`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### The owner user can only delete his own user

`ANSWER FORMAT - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

` ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

` ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Create contact </h2>

`POST /contact`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### The logged in user can register his contacts by passing the following information: full_name, phone e email

`ANSWER FORMAT - STATUS 201 CREATED`

```json
{
  "full_name": "teste",
  "email": "teste@teste.com",
  "phone": "02518882204",
  "id": "7036002c-14as-4a7c-9197-6fa9343a97ca",
  "createdAt": "2023-02-30T21:19:30.616Z"
}
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

If you already have a contact saved with the same email

`ANSWER FORMAT - STATUS 400 BAD REQUEST`

```json
{
  "message": "Email already exists"
}
```

<h2 align ='center'> list all contacts </h2>

`GET /contact`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### The logged in user will be able to list all his saved contacts

`ANSWER FORMAT - STATUS 200 OK`

```json
[
  {
    "full_name": "teste",
    "email": "teste@teste.com",
    "phone": "02518882204",
    "id": "7036002c-14as-4a7c-9197-6fa9343a97ca",
    "createdAt": "2023-02-30T21:19:30.616Z"
  },
  {
    "full_name": "teste2",
    "email": "teste2@teste.com",
    "phone": "01218882204",
    "id": "e7b40fad-0b48-401d-811e-e77f2f35aa98a",
    "createdAt": "2023-02-30T21:19:30.616Z"
  }
]
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

<h2 align ='center'> Update contact information </h2>

`PATCH /contact/:id`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### It is not possible to update contacts of other users, only yours. You must pass full_name, phone or email to update contact details.

```json
{
  "full_name": "Usuário"
}
```

`ANSWER FORMAT - STATUS 200 OK`

```json
{
  "message": "Contact updated"
}
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Delete a contact </h2>

`DELETE /contact/:id`

#

## This route requires authentication

Routes that require authentication must be informed in the request header in the "Authorization" field, like this:

> Authorization: Bearer {token}

#

### The owner user will be able to delete his contacts

`ANSWER FORMAT - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possible errors </h2>

If you do not pass the token in the "Authorization" field

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

If the token is wrong

`ANSWER FORMAT - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```
