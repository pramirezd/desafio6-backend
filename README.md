# Desafío 6 de Backend con Node y Express

## Instrucciones:
- Se debe utilizar la base de datos "softjobs". Si no está creada, las instrucciones son las siguientes:

    - Crear base de datos 'softjobs' con el siguiente comando: \
`CREATE DATABASE softjobs;`

    - Crear la tabla 'usuarios' con el siguiente comando: \
`CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);`

- Instrucciones generales para cargar el proyecto:

    - Ejecutar comando `npm install` en el directorio **/backend** para instalar las dependencias.

    - Renombrar el archivo '**.env.template**' (que está solo con los nombres de las variables y sin datos) a '**.env**' en el directorio **/backend** y completar la información para configurar las variables de entorno, que son las siguientes:
        - PORT= Corresponde al puerto del backend
        - PGHOST= Corresponde al host de la DB
        - PGUSER= Corresponde al user de la DB
        - PGPASSWORD= Corresponde a la contraseña del user de la DB
        - PGDATABASE= Corresponde a la DB a la que nos conectaremos
        - PGPORT= Corresponde al puerto habilitado para conectarse a la DB
        - JWT_SECRET= Corresponde a la llave JWT. Para generarla, seguir la siguiente instrucción:
            - Ejecutar el comando `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` en la consola.
            - Copiar el string generado en el el campo de JWT_SECRET para que quede la llave configurada.

    - Ejecutar comando `npm install` en el directorio **/frontend** para instalar las dependencias.

    - Finalmente para ejecutar el proyecto completo, se debe usar el comando `npm run dev` en el directorio **/backend** y también en el directorio **/frontend** para luego ingresar en la URL del servidor de frontend.

### Pablo Ramírez &copy;