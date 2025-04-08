Hemos tenido un fallo con la version actual de node.

Hemos usado nvm para instalar la version 22.12.0 de node con nvm install 22.12.0 y nvm use 22.12.0.

Hemos reinstalado todas las dependencias y ya funciona todo.

```bash
usuario@~/codebase/ rm package-lock.json 
usuario@~/codebase/ rm package.json 
usuario@~/codebase/ rm -rf node_modules/
usuario@~/codebase/ npm i express better-sqlite3
```
