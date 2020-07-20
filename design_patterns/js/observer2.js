class Products {
    
    constructor(products) {
        this.products = [];
        this.suscriptors = [];
    }

    setProduct(product) {
        if( typeof product === 'string' ) {
            this.products.push(product);
        }
    }

    setSubscriber(callback) {
        this.suscriptors.push(callback);
    }

}

class View {
    constructor() {
        products.setSubscriber(this.renderProducts);
    }

    renderProducts(id) {
        const container = document.getElementById(id);
        const list = document.createElement("ul");

        this.products.forEach( product ) {
            let itemList = document.createElement("li");
            itemList.textContent = product;
            list.appendChild(itemList);
        }

        container.appendChild(list);

    }

}

const products = new Products();