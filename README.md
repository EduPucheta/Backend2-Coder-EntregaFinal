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
| `/register` | POST     | Registrar nuevo usuario                | No   | `{ "firstName": "Edu","lastName": "Gutierrez", "email": "Edu14@gmail.com", "age": 31,"password": "123457904", "role": "user"}` |
| `/login`    | POST     | Loguear usuario registrado             | No   | `{"email": "Edu14@gmail.com","password": "123457904"}`                                              |


### `/api/products`

| Endpoint | Http Req | Description                   | Auth | Body                                                                                                                                                                                                    |
| -------- | -------- | ----------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`      | GET      | Obtener todos los productos   | No   | -                                                                                                                                                                                                       |
| `/:pid`   | GET      | Obtener un producto por su Id | No   | -                                                                                                                                                                                                       |
| `/`      | POST     | Guardar un producto           | "admin"   | `{"title": "Producto 7","description": "Este es otro producto mas","price": 570,"thumbnail":[],"code": "ASDF1245","stock": 42,"category":Electrónica"}` |
| `/:pid`   | PUT      | Actualizar un producto        | "admin"  | `{ "price": 389 }`                                                                                                                                                                                      |
| `/:pid`   | DELETE   | Eliminar un producto          | "admin"  | -                                                                                                                                                                                                       |

### `/api/cart`

| Endpoint              | Http Req | Description                                | Auth | Body                                                   |
| --------------------- | -------- | ------------------------------------------ | ---- | ------------------------------------------------------ |
| `/create/:userId`     | GET      | Crear un carrito                           | Sí   | -                                                      |
| `/:userId`            | GET      | Obtener carrito de un usuario              | Sí   | -                                                      |
| `/remove/:userId`     | PUT      | Eliminar todos los productos de un carrito | Sí   | -                                                      |
| `/:userId`            | PUT      | Agregar un producto al carrito             | Sí   | `{ "_id": "644ca048b68b415727b1fc2e", "quantity": 1 }` |
| `/:userId/:productId` | PUT      | Actualizar o remover un producto           | Sí   | `{ "quantity": 3 }`                                    |
| `/:userId`            | DELETE   | Eliminar el carrito                        | Sí   | -                                                      |

