const alumnos = {
    listaAlumnos: [],
    
    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },

    crear: function(datos) {
        console.log(datos);
        this.listaAlumnos.push(datos)
        return datos;
    },

    listado: function() {
        return this.listaAlumnos;
    }

}

const infoAlumno = {
    nombre: "Federico",
    edad: "24"
}

const infoAlumno2 = {
    nombre: "Mathias",
    edad: "21"
}

alumnos.crear(infoAlumno)
alumnos.crear(infoAlumno2)

const listado = alumnos.listado();

const alumno = alumnos.get(0);

console.log(alumno);