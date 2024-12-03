#!/bin/bash
# Este script configura tu sistema ubuntu para poder tener tu entorno de trabajo rápidamente
# Necesitarás ejecutarlo como sudo, para ello:
# Si aun no tienes permisos:
# su -
# sudo usermod -aG sudo tu_usuario
# exit
# reinicia el sistema y ejecuta el script con sudo

if [ "$EUID" -ne 0 ]; then
  echo "Por favor, ejecuta este script como root o con sudo."
  exit 1
fi

# Variables de usuario y contraseña
user="evagr11" 
email="evagallardor@icloud.com"

# Instalar paquetes necesarios

apt update
apt install -y git curl wget 

# Configuración de git
git config --global user.name $user
git config --global user.email $email

# Instalar gh (GitHub CLI)
# Extraido de https://github.com/cli/cli/blob/trunk/docs/install_linux.md
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
	&& sudo mkdir -p -m 755 /etc/apt/keyrings \
	&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
	&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
	&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
	&& sudo apt update \
	&& sudo apt install gh -y

# Instalar Docker
# Extraido de https://docs.docker.com/engine/install/ubuntu/
sudo apt-get update
sudo apt-get install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Instalar nvm y nodejs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22

# Instalar mongodb
sudo apt-get install gnupg -y
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt update
sudo apt-get install -y mongodb-org

# Instalar redis
sudo apt-get install lsb-release curl gpg -y
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis -y

# QoL
apt install -y xclip htop tree tmux

echo "alias ll='ls -la'" >> ~/.bashrc
echo "alias toclip='xclip -selection clipboard'" >> ~/.bashrc

# Instalar vscode
sudo apt-get install wget gpg -y
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https -y
sudo apt update
sudo snap install code --classic # or code-insiders

# Configuracion de vscode

code --install-extension ritwickdey.liveserver
code --install-extension bierner.markdown-mermaid
code --install-extension gera2ld.markmap-vscode
