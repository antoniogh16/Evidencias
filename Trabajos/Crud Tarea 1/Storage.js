export const Storage = {
    obtener(clave) {
        const valor = window.localStorage.getItem(clave);
        if (!valor) {
            return [];
        }
        return JSON.parse(valor);
    },
    asignar(clave, valor) {
        window.localStorage.setItem(clave, JSON.stringify(valor));
    },
    eliminar(clave) {
        window.localStorage.removeItem(clave);
    },
    limpiar() {
        window.localStorage.clear();
    }
};
