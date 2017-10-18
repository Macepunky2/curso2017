"use strict";
exports.__esModule = true;
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
        this.patas = 4;
    }
    Perro.prototype.ladrar = function () {
        return 'WOW';
    };
    return Perro;
}());
exports.Perro = Perro;
