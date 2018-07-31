var categories = [
    {
        name: 'Phones',
        link: '#',
        children: [
            {
                name: 'Nokia',
                link: '#',
                children:[]
            },
            {
                name: 'Samsung',
                link: '#',
                children:[]
            },
            {
                name: 'iPhone',
                link: '#',
                children:[]
            },
            {
                name: 'LG',
                link: '#',
                children:[]
            }
        ]
    },
    {
        name: 'Laptops',
        link: '#',
        children: [
            {
                name: 'Asus',
                link: '#',
                children:[]
            },
            {
                name: 'Samsung',
                link: '#',
                children:[]
            },
            {
                name: 'Aser',
                link: '#',
                children:[]
            },
            {
                name: 'DEL',
                link: '#',
                children:[]
            }
        ]
    }

];

function categor() {
    let categories = document.createElement('div'),
        phon = document.createElement('div'),
        phones = document.createElement('h2'),
        child = document.createElement('div'),
        nokia = document.createElement('h3'),
        samsung = document.createElement('h3'),
        iphone = document.createElement('h3'),
        lg = document.createElement('h3'),
        lapt = document.createElement('div'),
        laptops = document.createElement('h2'),
        children = document.createElement('div'),
        asus = document.createElement('h3'),
        sams = document.createElement('h3'),
        aser = document.createElement('h3'),
        del = document.createElement('h3');


    categories.classList.add('categories');
    phones.classList.add('parent');
    child.classList.add('children');
    laptops.classList.add('parent');
    children.classList.add('children');

    phones.textContent = 'Phones';
    nokia.textContent = 'Nokia';
    samsung.textContent = 'Samsung';
    iphone.textContent = 'iPhone';
    lg.textContent = 'LG';
    laptops.textContent = 'Laptops';
    asus.textContent = 'Asus';
    sams.textContent = 'Samsung';
    aser.textContent = 'Aser';
    del.textContent = 'DEL';


    document.body.appendChild(categories);
    categories.appendChild(phon);
    phon.appendChild(phones);
    phon.appendChild(child);
    child.appendChild(nokia);
    child.appendChild(samsung);
    child.appendChild(iphone);
    child.appendChild(lg);
    categories.appendChild(lapt);
    lapt.appendChild(laptops);
    lapt.appendChild(children);
    children.appendChild(asus);
    children.appendChild(sams);
    children.appendChild(aser);
    children.appendChild(del);


}

categor();

let parent = document.getElementsByClassName('parent'),
    child = document.getElementsByClassName('children');

for(let i = 0; i < parent.length; i++) {
    parent[i].addEventListener('click', function(){
        if(!(this.classList.contains('active'))){
            for(let i = 0; i < parent.length; i++){
                parent[i].classList.remove('active');
            }
            this.classList.add('active');
        }else{
            parent[i].classList.remove('active'); 
        }
    });
}

