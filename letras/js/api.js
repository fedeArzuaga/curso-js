export class API {

    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    async apiQuery() {

        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);

        const results = await url.json();

        return {
            results
        }

    }

}