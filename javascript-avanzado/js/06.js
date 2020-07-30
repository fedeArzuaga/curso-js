// Clases y prototypes

export function Playlist( name ) {
    this.name = name;
}

Playlist.prototype.play = function() {
    console.log(`Reproduciendo ${this.name}`);
}

Playlist.prototype.delete = function() {
    console.log(`Eliminando ${this.name}`);
}