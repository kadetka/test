var categories = [{
    name: 'Phones',
    link: '#',
    children:[
        {name: 'Nokia', link: '#',children:[]},
        {name: 'Samsung', link: '#',children:[]},
        {name: 'iPhone', link: '#',children:[]},
        {name: 'LG', link: '#',children:[]}
        ]
    },
    {
        name: 'Laptops',
        link: '#',
        children:[
            {name: 'Asus', link: '#',children:[]},
            {name: 'Samsung', link: '#',children:[]},
            {name: 'Acer', link: '#',children:[]},
            {name: 'DEL', link: '#',children:[]}
        ]
    }
];


class Akkord {
    constructor(dataAkkord) {
        this.data = data.Akkord;

        this.container = document.createElement('div');
        this.categ = {};
        this.categ.name = document.createElement('div');
    }

    render(){
        this.container.className = 'col-sm-6';
        this.categ.name.className = 'p-name';
        this.categ.name.innerHTML = this.data.name;

        this.build();

        return this.container;
    }

    build(){
        for(var j in this.categ){
            this.container.appendChild(this.categ[j])
        }
    }
}

