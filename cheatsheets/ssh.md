# SSH

SSH (Secure Shell) es un protocolo criptográfico que permite la comunicación segura entre dos sistemas. SSH se utiliza para acceder de forma remota a servidores y dispositivos de red, así como para transferir archivos de forma segura.

## Conexión SSH

Para conectarse a un servidor remoto a través de SSH, podemos usar:

### Autenticación con contraseña

```bash
ssh username@hostname
```

### Especificar puerto

```bash
ssh -p port username@hostname
```

## Claves RSA

Las claves RSA se utilizan para autenticar la conexión SSH sin necesidad de introducir una contraseña. Para generar un par de claves RSA, podemos usar:

```bash
ssh-keygen -t rsa
```

Estas claves se guardan por defecto en `~/.ssh/id_rsa` (clave privada) y `~/.ssh/id_rsa.pub` (clave pública).

Tu clave pública debe ser copiada al servidor remoto en `~/.ssh/authorized_keys` para autenticar la conexión.

La clave privada debe tener permisos restrictivos:

```bash
chmod 600 ~/.ssh/id_rsa
```

Esta clave privada debe ser protegida, no compartida y almacenada de forma segura.

Para copiar la clave pública al servidor remoto, podemos usar:

```bash
ssh-copy-id username@hostname
```

Este comando copia la clave publica situada en `~/.ssh/id_rsa.pub` al servidor remoto en `~/.ssh/authorized_keys`.