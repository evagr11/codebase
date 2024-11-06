# Git

## Config

```bash
git config --global user.name "name"          # Configura el nombre de usuario
git config --global user.email "email"        # Configura el email de usuario
git config --global init.defaultBranch "main" # Configura la rama por defecto
```

## Comandos

```bash
git init                # Inicia un repositorio
git status              # Estado actual del repositorio
git add <file>          # Añade cambios al stagging area
git commit -m <mensaje> # Guarda cambios del stagging area
git log                 # Muestra el historial de commits
git diff                # Muestra los cambios en el directorio de trabajo
git branch              # Muestra las ramas
git branch <name>       # Crea una rama
git checkout <name>     # Cambia a una rama
git merge <name>        # Fusiona una rama con la actual
```

## Github

```bash
gh auth login                         # Inicia sesión en GitHub
gh repo create                        # Crea un repositorio en GitHub
gh repo clone <usuario>/<repositorio> # Clona un repositorio de GitHub
gh repo delete                        # Borra un repositorio
gh repo view                          # Muestra información de un repositorio
gh repo fork                          # Hace un fork de un repositorio
git remote add origin <url>           # Añade un repositorio remoto
git push                              # Sube cambios al repositorio remoto
git push -u origin <branch>           # Establece una rama remota por defecto
git pull                              # Descarga cambios del repositorio remoto
git clone <url>                       # Clona un repositorio
```