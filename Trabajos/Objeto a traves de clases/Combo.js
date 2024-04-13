export class Combo {
    id = '';
    nombre = '';
    clase = '';
    opciones = [];
    constructor(id, nombre, clase, opciones) {
        this.id = id;
        this.nombre = nombre;
        this.clase = clase;
        this.opciones = opciones;
    }
    mostrar() {
        let select = '<select id="' + this.id +
        '" name="' + this.nombre +
        '" class="form-select ' + this.clase + '">';

        for (let i = 0; i < this.opciones.length; i++) {
            select += '<option value="' + this.opciones[i] +
            '">' + this.opciones[i] + '</option>';
        }
        select += '</select>';
        return select;
    }
}