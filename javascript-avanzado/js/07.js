import { Playlist } from './06.js'

function Cancion( name, gender ) {
    Playlist.call(this, name)
    this.gender = gender;
}

const cancion = new Cancion