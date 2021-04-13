Run `docker-compose up` in the root of the project to spin up the server and database

Make sure that `CLIENT_URL` in docker-compose points to client (frontend)

Endpoints

- GET `/auth`
- POST `/auth/register`
- POST `/auth/login`
- GET `/auth/logout`

---

- GET `/survey/seed`
- GET `/survey`
- GET `/survey/:id`
- POST `/survey`
- PATCH `/survey/:id`

#### Example user

```json
{
  "login": "a",
  "email": "a@a.com",
  "password": "aaaaaa",
  "passwordConfirmation": "aaaaaa",
  "role": "pollster"
}
```
#### Example survey

```json
{
  "sex": "male",
  "pesel": "00000000000",
  "name": "test",
  "surname": "test",
  "dateOfBirth": "2021/01/01",
  "countryOfBirth": "poland",
  "maritalStatus": "single",
  "education": "higher",
  "address": "test",
  "voivodeship": "warminsko-mazurskie",
  "children": 0,
  "professionalActivity": "unemployed",
  "isDisabled": false,
  "earnings": 0,
  "religion": "test",
  "industry": "test",
  "peopleInApartment": 1
}
```  