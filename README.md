<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0%3A0F172A%2C50%3A334155%2C100%3A64748B&height=200&section=header&text=CODEBASE+1DAM&fontSize=60&fontColor=fff&fontAlignY=38&desc=Colecci%C3%B3n+de+ejercicios+y+proyectos+de+1%C2%BA+de+DAM&descAlignY=62&descSize=18" width="100%"/>
</div>

<div align="center">
  <a href="https://github.com/evagr11/codebase" target="_blank"><img src="https://img.shields.io/badge/Ver_Código-0F172A?style=for-the-badge&logo=github&logoColor=white" alt="Ver Código"></a>
  <a href="#-índice-de-proyectos"><img src="https://img.shields.io/badge/Ir_al_Índice-64748B?style=for-the-badge&logo=bookstack&logoColor=white" alt="Ir al Índice"></a>
  <img src="https://img.shields.io/badge/Estado-Terminado-334155?style=for-the-badge" alt="Estado Terminado">
</div>

<br>

<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com/?font=JetBrains+Mono&size=18&duration=3500&pause=800&color=94A3B8&center=true&vCenter=true&width=600&lines=JavaScript+Vanilla+para+manipular+el+DOM%3BServidores+con+Node.js+y+Express%3BBases+de+datos+con+SQLite%3BSketches+creativos+con+p5.js%3BScripts+de+Python+y+Hugging+Face" alt="Typing SVG" /></a>
</div>

# 🚀 Sobre el Proyecto

**Codebase** es mi cuaderno de código de **1º de DAM**: una colección de ejercicios de clase, pequeños proyectos y apuntes que van desde manipular el DOM con JavaScript puro hasta montar servidores con Node.js y SQLite, pasando por creative coding con p5.js, scripts de Python y retos de Linux y SQL.

Cada carpeta es independiente: algunas son una sola página HTML que se abre en el navegador y otras son pequeñas aplicaciones con su propio servidor y base de datos.

✨ **Características principales:**

*   💻 **Ejercicios de DOM:** Más de una docena de ejemplos con **JavaScript Vanilla**: eventos en inputs, rangos, operaciones, creación dinámica de elementos…
*   🌐 **Servidores con Node.js:** Pequeñas APIs con **Express** que sirven datos desde **SQLite** y exponen endpoints REST, una de ellas con **Socket.IO** para actualizar en tiempo real.
*   🗃️ **SQL desde la terminal:** Bases de datos **SQLite** consultadas con scripts `.sh` y con Python.
*   🎨 **Creative coding con p5.js:** Sketches y juegos que se ejecutan en el navegador.
*   🐍 **Python y APIs externas:** Peticiones HTTP, un CRUD contra **JSONBin** y modelos de **Hugging Face** (análisis de emociones, generación de texto e imágenes).
*   🕵️ **Retos de práctica:** Niveles de **Bandit** (OverTheWire) para aprender Linux y SSH, y casos de **SQL Noir** para practicar consultas.
*   📝 **Cheatsheets:** 14 guías rápidas en Markdown sobre Git, Linux, SSH, redes, servidores, JSON, async/await, MVC, ORM y bases de datos no relacionales.

# 🧠 Contexto del Proyecto

Este repositorio recoge el trabajo del primer curso del ciclo formativo de **Desarrollo de Aplicaciones Multiplataforma (1º DAM)**, sobre todo de las asignaturas de **Lenguajes de Marcas** y **Bases de Datos**. Funciona como un diario de código: los ejercicios hechos en clase, proyectos propios para reforzar lo aprendido y una base de apuntes para consultar rápido.

La variedad de carpetas y tecnologías refleja todo lo que se tocó durante el curso. Es el punto de partida del resto de proyectos de mi GitHub.

# 🗂️ Índice de Proyectos

### 🌐 Aplicaciones con servidor (Node.js + Express)

<div align="center">

| Carpeta | Qué es | Tecnologías |
| :------ | :----- | :---------- |
| [`parking/`](parking) | Gestión de plazas de parking libres y ocupadas, con vista visual y actualización en tiempo real | Express · SQLite · Socket.IO |
| [`users-htmx/`](users-htmx) | CRUD de usuarios sin recargar la página | Express · SQLite · HTMX |
| [`frutas/`](frutas) · [`frutas_aux/`](frutas_aux) | API REST de frutas con formulario para añadir nuevas | Express · SQLite |
| [`juego_p5/`](juego_p5) | Base de un juego en p5.js con usuarios guardados en el servidor | p5.js · Express · SQLite |
| [`T_Juego/`](T_Juego) | Cookie Clicker con los puntos guardados en el backend | p5.js · Express |
| [`http_servidor_basico/`](http_servidor_basico) | Servidor Express mínimo que sirve archivos estáticos | Express |

</div>

### 💻 Frontend y JavaScript

<div align="center">

| Carpeta | Qué es |
| :------ | :----- |
| [`DOM/`](DOM) | Ejercicios de manipulación del DOM: inputs, rangos, sumas, emojis, secciones… |
| [`inputs-js/`](inputs-js) | Lectura y validación de distintos tipos de input |
| [`promesas_js/`](promesas_js) | Peticiones con `fetch` y promesas contra la API de DummyJSON |
| [`flexbox/`](flexbox) | Maquetación con Flexbox (incluye una tarjeta de Pokémon) |
| [`Diferencia_bucles/`](Diferencia_bucles) | Diferencias entre bucles y gráfico de datos con Chart.js |
| [`transform_adn/`](transform_adn) | Transformación de cadenas de ADN a ARN |
| [`ventanitas/`](ventanitas) | Ventanas dibujadas con caracteres ASCII desde Node.js |
| [`p5/`](p5) | Primeros sketches con p5.js |
| [`EXAMEN/`](EXAMEN) | Ejercicios prácticos tipo examen |

</div>

### 🗃️ Bases de datos y Python

<div align="center">

| Carpeta | Qué es |
| :------ | :----- |
| [`intro_sqlite/`](intro_sqlite) | Primeras tablas en SQLite, consultas con scripts `.sh` y una app de tareas en Python |
| [`no-relacionales/`](no-relacionales) | Ejemplos de datos en JSON y CSV para bases de datos no relacionales |
| [`peticioneshttp/`](peticioneshttp) | Peticiones HTTP con `requests` |
| [`jsonbin/`](jsonbin) | CRUD contra la API de JSONBin con claves en `.env` |
| [`huggingface/`](huggingface) | Scripts con modelos de Hugging Face: emociones, texto e imágenes |

</div>

### 📝 Apuntes y retos

<div align="center">

| Carpeta / archivo | Qué es |
| :---------------- | :----- |
| [`cheatsheets/`](cheatsheets) | Guías rápidas de Git, Linux, SSH, red, servidores, JSON, HTML, p5.js, async/await, MVC, ORM y NoSQL |
| [`bandit/`](bandit) | Soluciones de los primeros niveles de Bandit (OverTheWire) |
| [`sqlNoir/`](sqlNoir) | Casos resueltos de SQL Noir |
| [`guias.md`](guias.md) | Páginas de referencia y práctica (CSS, Markdown, cifrado…) |

</div>

# 🛠️ Stack Tecnológico

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white" alt="p5.js">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/HTMX-3366CC?style=for-the-badge&logo=htmx&logoColor=white" alt="HTMX">
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO">
</div>

<br>

<div align="center">

| Área | Tecnologías |
| :--- | :---------- |
| **Frontend** | `HTML5`, `CSS3` (Flexbox), `JavaScript (ES6+)`, `p5.js`, `HTMX`, `Chart.js` |
| **Backend** | `Node.js`, `Express`, `Python` |
| **Bases de datos** | `SQLite` (`sqlite3`, `better-sqlite3`), JSON |
| **Tiempo real** | `Socket.IO` |
| **APIs externas** | `Hugging Face`, `JSONBin`, `DummyJSON` |
| **Herramientas** | `npm`, `Nodemon`, `Bash`, `Git` |

</div>

# 📂 Estructura del Proyecto

```bash
codebase/
├── cheatsheets/           # Apuntes y guías rápidas en Markdown
├── bandit/                # Retos de Linux y SSH (OverTheWire)
├── sqlNoir/               # Casos de SQL Noir
├── DOM/                   # Ejercicios de manipulación del DOM
├── inputs-js/             # Inputs con JavaScript
├── promesas_js/           # fetch y promesas
├── flexbox/               # Maquetación con Flexbox
├── Diferencia_bucles/     # Bucles y gráfico con Chart.js
├── transform_adn/         # ADN → ARN
├── ventanitas/            # Ventanas ASCII en Node.js
├── p5/                    # Sketches con p5.js
├── EXAMEN/                # Ejercicios tipo examen
├── http_servidor_basico/  # Servidor Express mínimo
├── frutas/                # API REST de frutas (Express + SQLite)
├── frutas_aux/            # Versión alternativa con better-sqlite3
├── parking/               # Parking con Express, SQLite y Socket.IO
├── users-htmx/            # CRUD de usuarios con HTMX
├── juego_p5/              # Juego p5.js con backend
├── T_Juego/               # Cookie Clicker con backend
├── intro_sqlite/          # SQLite con Bash y Python
├── no-relacionales/       # Datos en JSON y CSV
├── peticioneshttp/        # Peticiones HTTP con Python
├── jsonbin/               # CRUD con JSONBin
├── huggingface/           # Modelos de Hugging Face con Python
├── setup-ubuntu.sh        # Script para preparar un entorno Ubuntu de desarrollo
├── guias.md               # Webs de referencia
├── diagrama.md / .png     # Diagrama de apoyo
└── README.md
```

# 🚀 Cómo Utilizar el Proyecto

Como cada carpeta es un proyecto independiente, la forma de ejecutarlo depende del tipo.

### 1. Clonar el repositorio

```bash
git clone https://github.com/evagr11/codebase.git
cd codebase
```

### 2. Páginas HTML sueltas

Las carpetas como `DOM/`, `flexbox/`, `p5/` o `promesas_js/` se abren directamente: haz doble clic en el `.html` o usa la extensión **Live Server** de VS Code.

### 3. Proyectos con servidor Node.js

```bash
cd parking          # o frutas, frutas_aux, juego_p5...
npm install
npm start
```

Después abre `http://localhost:3000`. En `users-htmx/`, `http_servidor_basico/` y `T_Juego/` no hay script `start`, así que se arrancan con `node server.js` (o `node index.js` en el servidor básico).

> ⚠️ El `npm start` de `juego_p5/` borra la base de datos con `rm`, que no existe en el CMD de Windows. Ahí usa Git Bash, o borra `usuarios.db` a mano y lanza `npx nodemon server.js`.

### 4. Scripts de Python

```bash
pip install requests python-dotenv
python peticioneshttp/dummyjson.py
```

Para `huggingface/` y `jsonbin/` necesitas tus propias claves: copia el `.env_example` de la carpeta a un archivo `.env` y rellénalo.

### 5. Scripts de SQLite

Desde `intro_sqlite/tablaSQL/` o `parking/`, con `sqlite3` instalado:

```bash
bash usuarios_mayores_18.sh
```

<br>

<div align="center">
  <p>Creado por <strong>Eva Gallardo</strong></p>
  <a href="https://github.com/evagr11" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/eva-gallardo-romero-830362349/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0%3A0F172A%2C50%3A334155%2C100%3A64748B&height=120&section=footer" width="100%"/>
</div>
