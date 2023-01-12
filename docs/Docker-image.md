# Imagen de docker que se usará
A la hora de escoger la imagen de docker que voy a usar voy a tener en cuenta los siguientes criterios:
* Versión: se usará la versión más estable para que nuestro proyecto tenga el mejor soporte a pesar de perder ciertas funcionalidades que se hayan añadido en versiones nuevas (menos estables).
* Tendrán preferencia versiones oficiales.
* Tamaño (menor tamaño = mejor)

Las imágenes de docker que son interesantes para mi proyecto son:
* [node](https://hub.docker.com/_/node): podría usarla por su estabilidad, versatilidad y compatibilidad con mi proyecto.
* [buster-slim](https://hub.docker.com/r/linuxcontainers/buster-slim): contenedor basado en debian que, como su nombre lo indica es liviana (64.03MB). No la voy a usar porque no se ajusta a las necesidades de mi proyecto, pero es una pena por el tamaño que tiene.
* grunt image: se plantea la posibilidad de crear mi propia imagen de docker. 

Otra opción que he encontrado y me parece interesante es:
* [/huli/grunt](https://hub.docker.com/r/huli/grunt/#!): Esta imagen se ha creado con el objetivo de ejecutar tareas de grunt en alpine, su tamaño es de 350MB (aproximadamente) Un punto a tener en cuenta es que usa la última versión estable de nodejs sin embargo lleva sin mantenimiento más de un año. Es la principal razón por la que se ha descartado.


La idea que tenía en mente al inicio era crear una imagen de docker propia pero tras dedicarle mucho tiempo a la implementación de la misma se ha descartado la posibilidad por la complejidad, el tiempo que requiere y problemas de incompatibilidad. El tamaño estimado de la imagen es de 260MB.
## Decisión Final
Finalmente he decidido hacer uso de la imagen oficial de node en su última versión ya que, a pesar de ser la más pesada se trata de un proyecto en los que los diferentes elementos que lo componen se están usando en la actualidad y se actualizan constantemente por lo que no habrá problemas como incompatilidad de versiones.

