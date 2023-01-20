## Sobre la Prueba

### Ejercicio 1

En este test esperamos poder ver todo el conocimiento que tienes al momento de desarrollar
software, ver cuál es tu acercamiento a la solución y cuáles buenas prácticas manejas. Por
favor lee todo el enunciado antes de comenzar.
Para ello te presentamos el problema a resolver a continuación:
Debes crear un sitio similar a la app de GoodMeal, usando para el Front Vue 2/3 (con
cualquier lib de CSS) y para el backend usar Laravel 8 o superior.
Para esto, debes considerar:
Tenemos las siguientes vistas principales (ver imágenes):
- Home de tiendas con una vista similar a la app
- Interior de una tienda
- Lista de órdenes
- Vista de una orden
- Comprar productos (libre el diseño)
Las funciones son simples:
- Puedo ver lista de tiendas existentes y con stock
- Puedo acceder a una tienda y ver sus productos
- Puedo comprar productos, que generan una orden de compra
- Puedo entrar a ver mi lista de órdenes
- Puedo entrar a ver la información de una orden.
Debes construir una API que permita:
- CRUD de tiendas
- CRUD de productos de tiendas

Los modelos de datos, referente a lo que tiene cada modelo, puedes guiarte por las imágenes y
agregar cosas que consideres importantes. Aquí el usuario es único, por lo tanto, el que lo use
es el usuario, en consecuencia no hay problema con asociar las órdenes.
Resumiendo, debes crear un backend en laravel que permita usar el front en vue y una API en
laravel que permita agregar data al backend.



### Reglas de evaluación

- Esperamos los tres servicios en un solo repositorio, ordenados como mejor te convenga
- Queremos entender como fue que completaste la implementación, por lo tanto, debemos ser
capaces de leer una historia al revisar los commits del repositorio, esperamos comentarios
atingentes a lo que se hizo, hazlo con calma y organízate bien.
- Dentro del repo, debe existir un archivo Dockerfile/Compose que permita ejecutar todos los
servicios, para ser probados.
- Debemos contar con documentación de como usar la API. (OpenAPI)

- Debemos tener 100% de cobertura de TEST, para el código que has implementado,
importante contar con el comando para ejecutar los tests.
- Solo vamos a considerar tu solución, si nos envías el enlace con tu propio repositorio con la
solución propuesta (github, gitlab, etc).
- Debes documentar el diseño de tu solución, para entender como estar organizado.