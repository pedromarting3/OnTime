# OnTime-Pedro Martín González
## Descipción del problema a resolver
En muchas ocasiones he tenido el problema de no saber qué ruta escoger ya que, dependiendo del tráfico, podría ser más rápido tomar la ruta más larga.
 
## Propuesta de solución
La solución planteada actualmente a este problema es la creación de un servicio que permita al usuario planificar su ruta teniendo en cuenta el tráfico y diferentes factores.

## Lógica de negocio
El servicio creado recopilará la información de los usuarios del mismo así como las rutas que toma y las paradas que hace. Esta información se podrá obtener a través de la conexión del dispositivo del usuario con su propio vehículo (específicamente el coche) del que se obtendrán diferentes datos (consumo medio, distancia recorrida...) Cuando combinemos estos datos con nuestro servicio generará información útil.
Los principales clientes del servicio serán:
* Usuarios-> Podrán obtener la mejor ruta a su destino.
* Concejalía de urbanismo-> Usarán la información recopilada con el fin de mejorar y optimizar la infraestructura de las ciudades.

## Docs
* [Configuración de claves SSH y GPG](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Captura%20de%20Pantalla%202022-09-15%20a%20las%2011.31.04.png)

* [Configuración de repositorio local](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Captura%20de%20Pantalla%202022-09-16%20a%20las%2019.31.40.png)

* [Personas](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Personas.md)

* [Milestones](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Milestones.md)

* [Historias de usuario](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Historias.md)

* [Gestor de dependencias](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/gestor_dependencias.md)

* [Gestor de tareas](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/gestor_tareas.md)

* [Test runner y librería de aserciones](https://github.com/pedromarting3/OnTime/blob/objetivo4/docs/Test.md)

* [Imagen de Docker](https://github.com/pedromarting3/OnTime/blob/objetivo5/docs/Docker-image.md)

## Check sintax
Para comprobar la sintaxis  de los directorios ejecuta el siguiente comando:
```shell
grunt check
```

## Run tests
Para ejecutar los test se ejecuta el siguiente comando:
```shell
grunt test
```