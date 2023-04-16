## NODE v18

## database pg

## migrations generate

```
yarn migrations:generate
```

## migrations run

```
yarn migrations:run
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## License

Nest is [MIT licensed](LICENSE).

## test signup

POST: http://localhost:3000/user/signup

```
{
    "email":"nvvluan.it@gmail.com",
    "password":"sdfasfd",
    "username":"nguyen vv luan",
    "age":"hsda",
    "avatar":"nvvvssds"
}
```

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMmM0MWVkLTU5OTMtNDk4ZS1iYTYxLTRmZDY4Mjk3ZjQ0OCIsInVzZXJuYW1lIjoibmd1eWVuIHZ2IGx1YW4iLCJlbWFpbCI6Im5ubHVhbkBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MTIxODUsImV4cCI6MTY4MTY5ODU4NX0.GEyb3Pr3rocN5SqhMUpL4TO2ZpcJ_xovWDbxxatsBC0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMmM0MWVkLTU5OTMtNDk4ZS1iYTYxLTRmZDY4Mjk3ZjQ0OCIsInVzZXJuYW1lIjoibmd1eWVuIHZ2IGx1YW4iLCJlbWFpbCI6Im5ubHVhbkBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MTIxODUsImV4cCI6MTY4MTY5ODU4NX0.bIpBH9-LpXET_aUt21HxWXDpXRg5AOBSc8uX5jOhQuY"

}
```

## test signing

POST: http://localhost:3000/user/singing

```
{
   "email":"nvvluan.it@gmail.com",
    "password":"sdfasfd",
}
```

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMmM0MWVkLTU5OTMtNDk4ZS1iYTYxLTRmZDY4Mjk3ZjQ0OCIsInVzZXJuYW1lIjoibmd1eWVuIHZ2IGx1YW4iLCJlbWFpbCI6Im5ubHVhbkBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MTIxODUsImV4cCI6MTY4MTY5ODU4NX0.GEyb3Pr3rocN5SqhMUpL4TO2ZpcJ_xovWDbxxatsBC0",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxMmM0MWVkLTU5OTMtNDk4ZS1iYTYxLTRmZDY4Mjk3ZjQ0OCIsInVzZXJuYW1lIjoibmd1eWVuIHZ2IGx1YW4iLCJlbWFpbCI6Im5ubHVhbkBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MTIxODUsImV4cCI6MTY4MTY5ODU4NX0.bIpBH9-LpXET_aUt21HxWXDpXRg5AOBSc8uX5jOhQuY"

}
```

## call get all user

GET: http://localhost:3000/user

```
[
    {
        "createAt": "2023-04-15T16:09:45.046Z",
        "updateAt": "2023-04-15T16:09:45.046Z",
        "id": "0d043f26-e85b-4877-8cf4-844068c38345",
        "username": "nguyen luan",
        "age": 21,
        "role": "ghost",
        "email": "nbblaun@gmail.com"
    },
    {
        "createAt": "2023-04-15T16:09:45.046Z",
        "updateAt": "2023-04-15T16:09:45.046Z",
        "id": "b12c41ed-5993-498e-ba61-4fd68297f448",
        "username": "nguyen vv luan",
        "age": 21,
        "role": "ghost",
        "email": "nnluan@gmail.com"
    },
]
```
