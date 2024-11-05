# BANDIT 1

Tenemos que leer un archivo llamado `-` en nuestra carpeta de usuario.

Si intento hacer `cat -`se queda colgado, el caracter `-` es una palabra reservada en el terminal.

Tenemos que pasar la ruta completa para leerlo `cat /home/bandit1/-`

La contraseña es: `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`


```bash
ssh usuario@direccion -p 1234
```
Para resolver el nivel:
```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
# introducimos contraseña bandit0 para entrar
# la contraseña esta en /home/bandit0/readme
# ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If