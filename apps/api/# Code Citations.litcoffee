# Code Citations

## License: unknown
https://github.com/mooka007/Car/blob/dcbbdcc8b178d10036667db492ee6ec42a274e70/client/src/hooks/useAuthentication.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const
```


## License: unknown
https://github.com/Rahul1101997/Foodzilla/blob/aee5c9bbe7d52b7bc55666a8b95a60ac0eeeccb7/src/Components/Login/Login.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  // Store tokens in localStorage/secure storage
  localStorage.setItem('accessToken', data.accessToken);
```


## License: unknown
https://github.com/mooka007/Car/blob/dcbbdcc8b178d10036667db492ee6ec42a274e70/client/src/hooks/useAuthentication.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const
```


## License: unknown
https://github.com/Rahul1101997/Foodzilla/blob/aee5c9bbe7d52b7bc55666a8b95a60ac0eeeccb7/src/Components/Login/Login.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  // Store tokens in localStorage/secure storage
  localStorage.setItem('accessToken', data.accessToken);
```


## License: unknown
https://github.com/mooka007/Car/blob/dcbbdcc8b178d10036667db492ee6ec42a274e70/client/src/hooks/useAuthentication.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const
```


## License: unknown
https://github.com/Rahul1101997/Foodzilla/blob/aee5c9bbe7d52b7bc55666a8b95a60ac0eeeccb7/src/Components/Login/Login.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  // Store tokens in localStorage/secure storage
  localStorage.setItem('accessToken', data.accessToken);
```


## License: unknown
https://github.com/Rahul1101997/Foodzilla/blob/aee5c9bbe7d52b7bc55666a8b95a60ac0eeeccb7/src/Components/Login/Login.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  // Store tokens in localStorage/secure storage
  localStorage.setItem('accessToken', data.accessToken);
```


## License: unknown
https://github.com/mooka007/Car/blob/dcbbdcc8b178d10036667db492ee6ec42a274e70/client/src/hooks/useAuthentication.js

```
Great news! Your auth setup is already well-structured. Here's how **signup** and **signin** work in your current setup:

## Endpoints Available

**POST `/auth/signup`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "success": true
}
```

**POST `/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Returns:
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "jwt_token",
  "user": { "id", "email", "status", ... }
}
```

## How It Works

1. **Signup** → Creates user in Supabase Auth + stores profile in your DB
2. **Login** → Authenticates with Supabase, generates JWT tokens, returns user data
3. **Access Token** → 15-minute JWT for API requests (add `Authorization: Bearer {token}` header)
4. **Refresh Token** → 7-day JWT to get new access tokens via `POST /auth/refresh`

## Frontend Integration (from your LoginForm/SignupForm)

```javascript
// Signup
const signup = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Login
const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  // Store tokens in localStorage/secure storage
  localStorage.setItem('accessToken', data.accessToken);
```

