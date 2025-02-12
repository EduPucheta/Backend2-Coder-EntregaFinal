# Entrega Final Curso de Backend 2

## Tecnologías utilizadas:

- NodeJS
- ExpressJS
- MongoDB
- Passport, JWT, bcrypt

## Como correr el proyecto de forma local:

1. Correr "npm install" en la terminal.
2. Correr "npm run dev" en la terminal.
4. Actuliazar las variables de enterno con las credenciales correctas.


## Uso📌

A continuación se listan los endpoint correspondientes, junto con una breve descripción, y en caso de corresponder, un ejemplo del body que reciben. También se indica en la columna "Auth", si la ruta debe ser authorizada por JWT antes de llegar al controlador.

> Nota: Para probar la aplicación con POSTMAN, se debe comentar la línea que habilita el acceso mediante CORS

### `/api/auth`

| Endpoint    | Http Req | Description                            | Auth | Body                                                                                                    |
| ----------- | -------- | -------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| `/register` | POST     | Registrar nuevo usuario                | No   | `{ "email": "testing@mail.com", "password" : "12345678", "phone": 11236856546, "username": "testing" }` |
| `/login`    | POST     | Loguear usuario registrado             | No   | `{ "email": "testing@mail.com", "password" : "12345678" }`                                              |
| `/all`      | GET      | Obtener todos los usuarios             | No   | -                                                                                                       |
| `/:userId`  | DELETE   | Eliminar un usuario                    | No   | -                                                                                                       |
| `/`         | GET      | Authorizar un usuario con Bearer Token | Sí   | -                                                                                                       |

### `/api/products`

| Endpoint | Http Req | Description                   | Auth | Body                                                                                                                                                                                                    |
| -------- | -------- | ----------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`      | GET      | Obtener todos los productos   | No   | -                                                                                                                                                                                                       |
| `/:id`   | GET      | Obtener un producto por su Id | No   | -                                                                                                                                                                                                       |
| `/`      | POST     | Guardar un producto           | Sí   | `{ "title": "Blackmore", "price": 359, "description": "Ut malesuada vitae neque sit amet congue. Suspendisse potenti. Mauris …", "url": "guitarra_12_xzmjnz", "stock": 8, "category": "instrumentos" }` |
| `/:id`   | PUT      | Actualizar un producto        | Sí   | `{ "price": 389 }`                                                                                                                                                                                      |
| `/:id`   | DELETE   | Eliminar un producto          | Sí   | -                                                                                                                                                                                                       |

### `/api/cart`

| Endpoint              | Http Req | Description                                | Auth | Body                                                   |
| --------------------- | -------- | ------------------------------------------ | ---- | ------------------------------------------------------ |
| `/create/:userId`     | GET      | Crear un carrito                           | Sí   | -                                                      |
| `/:userId`            | GET      | Obtener carrito de un usuario              | Sí   | -                                                      |
| `/remove/:userId`     | PUT      | Eliminar todos los productos de un carrito | Sí   | -                                                      |
| `/:userId`            | PUT      | Agregar un producto al carrito             | Sí   | `{ "_id": "644ca048b68b415727b1fc2e", "quantity": 1 }` |
| `/:userId/:productId` | PUT      | Actualizar o remover un producto           | Sí   | `{ "quantity": 3 }`                                    |
| `/:userId`            | DELETE   | Eliminar el carrito                        | Sí   | -                                                      |

