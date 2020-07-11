class Interfaz {
    constructor() {
        this.init();
        this.listed = document.getElementById("resultado-eventos");
    }

    // Metodo para inicializar la api
    init() {
        this.printCategories();
    }

    printCategories() {
        const listCategories = events.getCategories()
            .then( categories => {
                const cats = categories;
                console.log(cats);
            } )
            .catch( error => console.log(error) )
    }

}