/**
 * Declaración de la clase Tramo. Objeto valor. Esta clase almacena los datos referentes a un tramo. Estos datos
 * son punto de origen, punto de destino y la distancia de separación entre esos dos puntos. 
 * Dos Tramos que tiene un mismo punto de origen y destino o ,si el punto de origen es igual 
 * al punto de destino de otro y viceversa, son el mismo Tramo.
 */
class Tramo {
    /**
     * Constructor de la clase Tramo
     * @param {String} origen Origen del tramo
     * @param {String} destino Destino del tramo
     * @param {Number} distancia Distancia de separación entre el origen y el destino
     * Las comprobaciones son imprescindibles para no introducir datos inválidos
     */
    constructor (origen, destino, distancia) 
    {
        if(origen && origen.trim().length != 0)
        {
            this.origen = origen;
        }
        else
        {
            throw new Error("El origen del tramo es imprescindible");
        }
        if(destino && destino.trim().length != 0)
        {
            this.destino = destino;
        }
        else
        {
            throw new Error("El destino del tramo es imprescindible");
        }
        if(distancia && distancia > 0)
        {
            this.distancia = distancia;
        }
        else
        {
            throw new Error("La distancia del tramo es imprescindible");
        }
    }

    /**
     * Método que devuelve el origen del tramo
     * @returns {String} origen Origen del tramo
     */
    get origen() {
        return this.origen;
    }

    /**
     * Método que devuelve el destino del tramo
     * @returns {String} destino Destino del tramo
     */
    get destino() {
        return this.destino;
    }

    /**
     * Método que devuelve la distancia del tramo
     * @returns {Number} distancia Distancia de separación entre el origen y el destino
     */
    get distancia() {
        return this.distancia;
    }

    
}