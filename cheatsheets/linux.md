# Linux

## Directorios

```bash
~           # directorio personal
/           # directorio raiz
./          # directorio actual
../         # directorio padre
-           # directorio anterior
/tmp        # directorio temporal
/bin        # binarios, programas
/sbin       # binarios del sistema
/usr        # programas de usuario
/etc        # configuraciones
/var        # archivos variables
/home       # directorios de usuario
/boot       # arranque
/mnt        # montaje
/media      # dispositivos montados
/etc/passwd # usuarios
/etc/shadow # contraseñas
```

## Comandos básicos

```bash
cd <ruta>                           # cambiar de directorio
ls <ruta>                           # listar archivos
cat <file>                          # mostrar contenido de archivo
less <file>                         # ver contenido de un archivo, se puede navegar con las flechas
nano <file>                         # editar archivo
cat 'tu mensaje' > <file>           # escribir texto en archivo
echo 'tu mensaje' >> <file>         # añadir texto al final de archivo
rm <file>                           # borrar archivo
rm -rf <dir>                        # borrar directorio y su contenido recursivamente sin preguntar
mv <file> <newfile>                 # renombrar archivo o moverlo
cp <rutaA> <rutaB>                  # copiar archivo
cp -r <rutaA> <rutaB>               # copiar directorio
mkdir <dir>                         # crear directorio
touch <file>                        # crear archivo
history                             # ver historial de comandos
clear                               # limpiar la pantalla
```

## Privilegios

```bash
su -
usermod -aG sudo user
```

## Sistema

```bash
systemctl start <service>           # iniciar servicio
systemctl stop <service>            # detener servicio
systemctl restart <service>         # reiniciar servicio
systemctl status <service>          # estado de servicio
systemctl enable <service>          # habilitar servicio al inicio
systemctl disable <service>         # deshabilitar servicio al inicio
```

## Procesos

```bash
lsof -i :<puerto>                   # ver que proceso esta usando un puerto
kill <pid>                          # matar proceso por id
fg <pid>                            # traer proceso a primer plano
ps aux                              # ver procesos
sudo lsof -i -P -n | grep LISTEN    # procesos escuchando en puertos
```

## Comunicacion

```bash
ping <ip>                           # comprobar conexión
ifconfig                            # ver configuración de red
traceroute <ip>                     # ver ruta de paquetes
ssh user1@localhost                 # conectarse por ssh
scp <file> user1@localhost:<ruta>   # copiar archivo por ssh
scp -r <dir> user1@localhost:<ruta> # copiar directorio por ssh
ftp localhost                       # conectarse por ftp
wget <url>                          # descargar archivo
curl <url>                          # mostrar contenido de url
```

## Pipes y redirecciones

```bash
|       # manda la salida de un comando al siguiente
>       # manda la salida de un comando a un archivo
>>      # añade la salida de un comando a un archivo
<       # manda un archivo a un comando
```

```bash
grep    # filtro de expresiones regulares
wc      # cuenta lineas, palabras y caracteres
sort    # ordena lineas
uniq    # elimina lineas duplicadas
seq     # genera secuencias de numeros
md5sum  # genera hash md5
sha1sum # genera hash sha1
```

```bash
cat * | grep 'password'         # buscar en todos los archivos el texto 'password'
cat lista.txt | wc              # contar lineas, palabras y caracteres de un archivo
cat usuarios.txt | sort         # ordenar lineas de un archivo
history | grep 'ls'             # buscar comandos en el historial
echo 'hola mundo' -n | md5sum   # generar hash md5 de un texto
echo 'hola mundo' -n | sha1sum  # generar hash sha1 de un texto
```

## Permisos

```bash
ls -l # listar archivos con detalles
chmod +x script.sh # dar permisos de ejecución
chown user1:group1 file.txt # cambiar propietario y grupo
chown user1 file.txt # cambiar propietario
chgrp group1 file.txt # cambiar grupo
umask 022 # establecer permisos por defecto
```

```bash
-rw-rw-r-- 1 datadiego datadiego 3652 ago  5 10:55 input.txt
drwxrwxr-x 2 datadiego datadiego 4096 ago  5 13:03 imgs
-rw-rw-r-- 1 datadiego datadiego 1252 ago  5 10:55 output.txt
-rw-rw-r-- 1 datadiego datadiego 1965 ago  5 01:22 README.md
-rwxrwxr-x 1 datadiego datadiego  165 ago  5 12:55 script.sh

d      # directorio
-      # archivo
l      # enlace simbólico
r      # lectura
w      # escritura
x      # ejecución
-      # sin permiso

-rw-rw-r-- # tipo|propietario|grupo|otros
1          # número de enlaces
datadiego  # usuario propietario
datadiego  # grupo propietario
1965       # tamaño en bytes
ago  5     # fecha de modificación
01:22      # hora de modificación
README.md  # nombre del archivo
```

## Utiles

```bash
tail -f /var/log/syslog # mostrar los ultimos 10 registros de un archivo
```
