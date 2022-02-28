const container = document.getElementById('container');

function makeRows(row,column){
    container.style.setProperty('--grid-row',row);
    container.style.setProperty('grid-column',column);

    for (let c = 0; c < (row * column); c++){
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16,16);