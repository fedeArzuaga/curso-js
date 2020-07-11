class EventBrite {
    constructor() {
        this.token_auth = "TXEKO3TWFGA225Q2UMDB";
        this.order = "date";
    }

    async getCategories() {

        // Consultar las categorias
        const response = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Wait response categories and return json
        const categories = response.json();

        return {
            categories
        }

    }

}