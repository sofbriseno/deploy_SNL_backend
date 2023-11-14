# grupo_SNL_backend

Documentación : https://documenter.getpostman.com/view/30754862/2s9YXmYffj

## Tareas pendientes:

- Terminar de armar el modelo E/R
- Setup de koa (nico)

=> Coordinar hora el sábado para armar base de datos en PostgreSQL.

## Total de tareas:
- Router de koa
- Armar base de datos con PostgreSQL igual al modelo E/R
- API
- Conectar API con frontend
- Documentación de la BDD (setup)
- Documentación de la API (setup y uso)


## Documentación BDD
Para configurar y levantar la base de datos, se deben seguir los siguientes pasos:

### Instalación de PostgreSQL

Lo primero que se debe hacer es instalar PostgreSQL. En WSL, se ejecuta el siguiente comando:
apt install postgresql postgresql-contrib

### Inicio del Servidor PostgreSQL

Una vez PostgreSQL esté instalado, para iniciar el servidor, se ejecuta el siguiente comando:
sudo service postgresql start
Si ve "OK" como respuesta, la conexión se ha establecido con éxito.

### Creación de un Usuario

Para crear un usuario con permisos de superusuario, se ejecuta el siguiente comando, reemplazando "NOMBRE_USER" con el nombre que se desee para el usuario:

sudo -u postgres createuser --superuser NOMBRE_USER

### Acceso a la Base de Datos

Para ingresar a PostgreSQL, se usa el siguiente comando:

sudo -u postgres psql

Para revisar si el usuario se creo correctamente se puede ejecutar el siguiente comando:
\du

### Creación de una Base de Datos

Para crear una base de datos, se utiliza el siguiente comando, reemplazando "NOMBRE_DB" con el nombre deseado para la base de datos:

sudo -u postgres createdb NOMBRE_DB

(Nosotros llamamos la nuestra "SNL_db")

Para revisar si se creo correctamente se puede ejecutar el siguiente comando:

\l

### Configuración de Contraseña para el Usuario

Para establecer una contraseña para el usuario, se ejecuta el siguiente comando en la sesión de PostgreSQL:

ALTER USER nombre_usuario WITH PASSWORD 'tu_contraseña'

### Conexión a la Base de Datos

Para conectarse a la base de datos, se utiliza el siguiente comando, reemplazando "nombre_usuario" y "nombre_bdd" con los valores correspondientes:

psql -U nombre_usuario -d nombre_bdd -h 127.0.0.1

### Integración de ORM y Sequelize

Para mapear la base de datos y trabajar con Sequelize:

- Paso 1: Añadir Sequelize al proyecto ejecutando el siguiente comando:
        yarn add sequelize

- Paso 2: Instalar Sequelize CLI para facilitar el uso en el proyecto:
        yarn add sequelize-cli

- Paso 3: Inicializar Sequelize con el siguiente comando para generar la carpeta de configuración de la base de datos:
        yarn sequelize init

Se edita el archivo config.json en la carpeta config según las preferencias.

- Paso 4: Crear una carpeta llamada "sequelizerc" para redirigir las rutas y mover los archivos generados (config, migrations, models, seeders) a la carpeta src.

- Paso 5: Iniciar Sequelize en el proyecto y cambie index.js a app.js.

- Paso 6: Incorporar Sequelize en el aplicación importando ORM en app.js:
        app.context.orm = orm;

Esto permite acceder a ORM desde cualquier directorio.

- Paso 7: Configurar el acceso a la base de datos instalando el adaptador de PostgreSQL:
        yarn add pg

- Paso 8: Instalar dotenv para gestionar variables de entorno:
        yarn add dotenv

- Paso 9: Modificar la extensión del archivo config.json a .js para hacerlo más dinámico. Importar la configuración del archivo .env y ajustar las variables según las definiciones en el archivo .env.

- Paso 10: Actualizar las referencias al archivo config.js en los archivos que lo estén utilizando.

- Paso 11: Crear un archivo index.js en la carpeta src que conecte la base de datos con la aplicación y la escuche. Realizar las modificaciones necesarias.

- Paso 12: Ejecutar "yarn start" para comprobar si todo funciona correctamente.

