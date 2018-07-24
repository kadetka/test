


class Product {
    constructor(dataProduct){
        this.data = dataProduct;

        this.container = document.createElement('div');
        this.param = {};
        this.param.image = document.createElement('img');
        this.param.name = document.createElement('span');
        this.param.price = document.createElement('span');
        this.param.button = document.createElement('button');
        
    }

    render() {
        this.container.className = 'col-sm-4';
        this.param.name.className = 'p-name';
        this.param.name.innerHTML = this.data.name;
        this.param.image.className = 'p-img';
        this.param.image.src = this.data.image;
        this.param.price.className = 'p-price';
        this.param.price.innerHTML = this.data.price;
        this.param.button.className = 'btn btn-primary'
        this.param.button.type = 'button';
        this.param.button.setAttribute('data-product-id', this.data.id);
        this.param.button.innerHTML = 'to cart';

        this.build();

        return this.container;
       
    }

    build(){
        for(var j in this.param){
            this.container.appendChild(this.param[j])
        }
    }


}

