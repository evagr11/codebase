
curl localhost:3000/usuarios

curl -X POST http://localhost:3000/usuario -H "Content-Type: application/json" -d '{"nombre": "Juan", "edad": 30, "correo": "juan@example.com"}'
