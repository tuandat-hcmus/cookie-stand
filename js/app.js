'use strict'

function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHour = [];
    this.generate = function () {
        if (this.cookiesPerHour.length > 0) {
            return;
        }
        for (let i = 0; i < 13; i++) {
            let customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // random number from min to max
            this.cookiesPerHour.push(Math.floor(customersPerHour * this.avg));
        }
    }
    this.render = function () {
        this.generate();
        const table = document.getElementById('table');
        let sum = 0;
        const tableRow = document.createElement('tr');
        for (let i = -1; i < 14; i++) {
            const tableData = document.createElement('td');
            if (i < 0) {
                tableData.innerText = this.name;
            }
            else if (i == 13) {
                tableData.innerText = sum;
            }
            else {
                sum += this.cookiesPerHour[i];
                tableData.innerText = this.cookiesPerHour[i];
            }
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }
}

function createFooter(){
    const table = document.getElementById('table');
    const tableRow = document.createElement('tr');
    const rowName = document.createElement('th');
    rowName.innerText = 'Totals';
    tableRow.appendChild(rowName);
    //tableRow.setAttribute('id', 'tableFooter');
    const rowList = document.querySelectorAll('tr');
    for(let i = 1; i < 15; i++){
        let sum = 0;
        const footerData = document.createElement('th');
        for(let j = 1; j < rowList.length; j++){
            sum += parseInt(rowList[j].children[i].innerText);
        }
        footerData.innerText = sum;
        tableRow.appendChild(footerData);
    }
    table.appendChild(tableRow);
}

const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location('Tokyo', 3, 24, 1.2);
const dubai = new Location('Dubai', 11, 38, 3.7);
const paris = new Location('Paris', 20, 38, 2.3);
const lima = new Location('Lima', 2, 16, 4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createFooter();

