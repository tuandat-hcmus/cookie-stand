'use strict'

function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHour = [];
    this.generate = function() {
        if(this.cookiesPerHour.length > 0){
            return;
        }
        for(let i = 0; i < 12; i++){
            let customersPerHour = Math.floor(Math.random() * 20 + 1); // random number from 1 to 21
            this.cookiesPerHour.push(Math.floor(customersPerHour * this.avg));
        }
    }
    this.render = function() {
        this.generate();
        const ul = document.createElement('ul');
        for(let i = 0; i < 12; i++){
            const li = document.createElement('li');
            const liText = document.createTextNode(this.cookiesPerHour[i]);
            li.appendChild(liText);
            ul.appendChild(li);
        }
        document.getElementById('main').appendChild(ul);
    }
}

const seattle = new Location('Seattle', 23, 65, 6.3);
seattle.render();

