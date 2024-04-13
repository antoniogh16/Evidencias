export const storage = {
    obtener(clave){
        const valor = window.localStorage.getItem(clave);
        if(!valor){
            return null;
        }
        return valor;
    },
    asignar(clave,valor){
        window.localStorage.setItem(clave,valor);
    },
    eliminar(clave){
        window.localStorage.removeItem(clave);
    },
    limpiar(){
        window.localStorage.clear();
    }
}