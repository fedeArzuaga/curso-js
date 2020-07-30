class Playlist {
    constructor( name ) {
        this.name = name;
    }
    play() {
        console.log(`Reproduciendo ${this.name}`);
    }
    delete() {
        console.log(`Eliminando ${this.name}`);
    }
}