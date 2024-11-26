# No relacionales

Las bases de datos no relacionales son una alternativa a las bases de datos relacionales, que se han vuelto muy populares en los últimos años. Estas bases de datos se utilizan para almacenar datos de forma más flexible y escalable que las clásicas bases de datos relacionales.

## Tipos de bases de datos no relacionales

Existen varios tipos de bases de datos no relacionales, cada una con sus propias características y ventajas. Algunos de los tipos más comunes son:

- **Bases de datos de documentos**: Almacenan los datos en forma de documentos, que pueden ser de diferentes formatos, como JSON o XML. Ejemplos de bases de datos de documentos son MongoDB y CouchDB.
- **Bases de datos de clave-valor**: Almacenan los datos en forma de pares clave-valor, donde cada valor está asociado a una clave única. Ejemplos de bases de datos de clave-valor son Redis y DynamoDB.
- **Bases de datos de columnas**: Almacenan los datos en forma de columnas, en lugar de filas, lo que permite una mayor flexibilidad en la estructura de los datos. Ejemplos de bases de datos de columnas son Cassandra y HBase.
- **Bases de datos de grafos**: Almacenan los datos en forma de nodos y relaciones, lo que permite representar de forma eficiente las relaciones entre los datos. Ejemplos de bases de datos de grafos son Neo4j y ArangoDB.

## Ventajas

- **Escalabilidad horizontal**: Las bases de datos no relacionales son más fáciles de escalar horizontalmente con más servidores.
- **Alto rendimiento**: Las bases de datos no relacionales suelen ser más rápidas y eficientes en la lectura y escritura de datos que las bases de datos relacionales.
- **Esquema flexible**: Las bases de datos no relacionales no requieren un esquema fijo, lo que significa que puedes almacenar datos en cualquier formato.
- **Documentos JSON**: Muchas bases de datos no relacionales almacenan los datos en forma de documentos JSON, lo que facilita la integración con otras aplicaciones.
- **Replicación y tolerancia a fallos**: Muchas bases de datos no relacionales admiten la replicación y la tolerancia a fallos, lo que garantiza la disponibilidad de los datos en caso de fallo de un servidor.
- **Facilidad de uso** (!): Las bases de datos no relacionales suelen ser más fáciles de usar y administrar que las bases de datos relacionales, especialmente en entornos de desarrollo ágiles y dinámicos.
- **Costo**: Las bases de datos no relacionales suelen ser más económicas que las bases de datos relacionales, especialmente en entornos de gran escala.

## Desventajas

- **Complejidad**: Algunas bases de datos no relacionales pueden ser más complejas de configurar y administrar que las bases de datos relacionales, especialmente en entornos de producción.
- **Consistencia**: Algunas bases de datos no relacionales sacrifican la consistencia en favor de la disponibilidad y la tolerancia a fallos, lo que puede llevar a problemas de integridad de los datos.
- **Escalabilidad vertical**: No son tan fáciles de escalar verticalmente como las bases de datos relacionales, lo que puede limitar su capacidad de crecimiento, ya que es fácil llegar a un límite de capacidad en un solo servidor.
- **Herramientas y soporte**: Algunas bases de datos no relacionales pueden carecer de herramientas y soporte adecuados, lo que puede dificultar su adopción en entornos empresariales, pero tienen una alta demanda en startups y empresas emergentes.
- **Conocimiento**: Requieren un conocimiento más profundo de las tecnologías subyacentes y de los patrones de diseño de bases de datos no relacionales, lo que puede ser un obstáculo para los desarrolladores acostumbrados a trabajar con bases de datos relacionales.

### Migraciones

En general, migrar de una base de datos relacional a una no relacional puede ser un proceso complejo y costoso, ya que implica cambiar la estructura de los datos y las consultas que se utilizan en la aplicación. Sin embargo, en muchos casos, los beneficios de escalar y gestionar grandes volúmenes de datos superan los costos asociados con la migración.

Es común comenzar con una base de datos relacional y luego migrar a una base de datos no relacional a medida que la aplicación crece y se vuelve más compleja. En muchos casos, las bases de datos no relacionales se utilizan en combinación con bases de datos relacionales para aprovechar las fortalezas de cada una.

### Usos

Teniendo en cunta los puntos fuertes de las bases de datos no relacionales, sus usos son ideales en los siguientes escenarios:

- **Aplicaciones web y móviles**: Las bases de datos no relacionales son ideales para aplicaciones web y móviles, se usan para almacenar las sesiones de los usuarios, los datos de los productos, las preferencias de los usuarios, etc.
- **Big data**: Las bases de datos no relacionales son ideales para almacenar grandes volúmenes de datos, como registros de eventos, datos de sensores, datos de redes sociales, etc.
- **IoT**: Las bases de datos no relacionales son ideales para almacenar datos de dispositivos IoT, como sensores, cámaras, etc.
- **Juegos**: Las bases de datos no relacionales son ideales para almacenar datos de juegos, como perfiles de usuarios, puntuaciones, logros, personajes, etc.
- **Análisis de datos**: Las bases de datos no relacionales son ideales para almacenar datos de análisis, como datos de clics, datos de ventas, datos de marketing, cualquier cosa que recojamos de los usuarios.
- **Aplicaciones en tiempo real**: Las bases de datos no relacionales son ideales para aplicaciones en tiempo real, como chats, notificaciones, seguimiento de ubicación, etc.
- **Aplicaciones distribuidas**: Las bases de datos no relacionales son ideales para aplicaciones distribuidas, como aplicaciones en la nube, aplicaciones de microservicios, etc.

## JSON

Es muy común que las bases de datos no relacionales almacenen los datos en formato JSON.

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "edad": 30,
  "email": "juanperez@ejemplo.com"
}
```