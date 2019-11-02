function createmain (){
let mainwrapper = document.createElement('div');
mainwrapper.classList.add('mainback');
document.body.append(mainwrapper);

let row = document.createElement('div');
row.classList.add('row');
mainwrapper.append(row);

for(let i = 0;i < 14;i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    row.append(cell);  
}

}   
createmain();