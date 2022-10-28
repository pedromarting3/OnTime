# Gestor de dependencias que se usará
A la hora de escoger el gestor de dependencias, he barajado diferentes posibilidades:  
* npm-> (Node Package Management) es un gestor de dependencias  desarrollado sobre Node.js en el que cada proyecto puede utilizar el archivo de instalación package.json a través de NMP y gestionarlo con GULP. Las dependencias se pueden optimizar y actualizar desde la terminal. Se pueden desarrollar nuevos proyectos desde archivos de dependencias y números de versión insertados automáticamente desde package.json (Es el "padre" del resto de gestores de dependencias que voy a tratar).
* bun -> se basa en la velocidad, rendimiento y polifacético (empaquetador, administrador de paquetes...). El objetivo de BUN es ejecutar la mayor parte de JavaScript fuera de los navegadores para mejorar el rendimiento y complejidad a su infraestructura futura.

En un principio, estaba manejando la posibilidad de usar bun pero tras investigar detenidamente sobre el tema decido usar npm. La documentación de bun es escasa y encuentro más completo npm.