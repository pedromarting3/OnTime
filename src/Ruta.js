/**
 * Declaración de la clase Ruta. Esta clase representa una ruta que está compuesta por una serie de tramos
 * que recorre un vehículo concreto.
 */
class Ruta {
    /**
     * Constructor de la clase Ruta
     * @param {String} nombre Nombre de la ruta
     * @param {Number} numeroParadas Número de paradas de la ruta 
     * @param {Array} tramos Tramos de la ruta
     */
    constructor(nombre, numeroParadas, tramos) {
        this.nombre = nombre;
        this.numeroParadas = numeroParadas;
        this.tramos = tramos;
    }

    /**
     * Método que devuelve el nombre de la ruta
     * @returns {String} nombre Nombre de la ruta
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el número de paradas de la ruta
     * @returns {Number} numeroParadas Número de paradas de la ruta
     */
    get numeroParadas() {
        return this.numeroParadas;
    }

    /**
     * Método que devuelve los tramos de la ruta
     * @returns {Array} tramos Tramos de la ruta
     */
    get tramos() {
        return this.tramos;
    }
}