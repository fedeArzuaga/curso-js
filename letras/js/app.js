import * as UI from './interfaz.js';
import { API } from './api.js';

UI.searchForm.addEventListener("submit", e => {

    e.preventDefault();

    const data = {
        artist: e.target.artist.value,
        song: e.target.song.value
    }

    if( data.artist === '' || data.song === '' ) {

        UI.messagesDiv.innerHTML = "Error... todos los campos son obligatorios";
        UI.messagesDiv.classList.add('error');

        setTimeout( () => {
            UI.messagesDiv.innerHTML = "";
            UI.messagesDiv.classList.remove('error');
        }, 3000);

    } else {

        const api = new API(data.artist, data.song);
        api.apiQuery()
            .then( data => {
                
                if( data.results.lyrics ) {

                    UI.resultsDiv.innerHTML = data.results.lyrics;

                } else {

                    UI.messagesDiv.innerHTML = `
                        La canción que has introducido al parecer no se encuentra en nuestra base de datos.
                        <div class="advice"><b>Sugerencia:</b> Trata de revisar el nombre que has escrito tanto del artista como de la canción. Puede que hayas introducido mal alguno de estos. Es importante que todos los datos sean correctos para realizar la consulta correctamente.</div>
                    `;
                    UI.messagesDiv.classList.add('error');

                    setTimeout( () => {
                        UI.messagesDiv.innerHTML = "";
                        UI.messagesDiv.classList.remove('error');
                    }, 10000);

                }

            });

    }

});