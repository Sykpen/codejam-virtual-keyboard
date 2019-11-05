function createmain (){
let mainwrapper = document.createElement('div');
mainwrapper.classList.add('mainback');
document.body.append(mainwrapper);

let row = document.createElement('div');
row.classList.add('row');
mainwrapper.append(row);

let keyLayout = [
    "~","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","+", "back",
    "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","/",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","↑","shift",
    "cntrl","win","alt","space","alt","win","←","↓","→","cntrl"
];

keyLayout.forEach(function keyKreation(key){
    let keyElement = document.createElement("div");
    keyElement.append(key);
    keyElement.classList.add("cell");
    row.append(keyElement);
    
    switch(key){
        case "back":
        keyElement.classList.add("big");
    break;
    case "tab":
        keyElement.classList.add("big");
    break;
    case "caps":
        keyElement.classList.add("big");
    break;
    case "enter":
        keyElement.classList.add("big");
    break;
    case "shift":
        keyElement.classList.add("big");
    break;
    case "space":
        keyElement.classList.add("space");
    break;          
    }  
});

mainwrapper.addEventListener("click", function(){
    let target = event.target.closest('div');
    let kees = document.getElementsByClassName('cell');
    kees.style.backgroundColor = '';   
    target.classList.add("selected");
});
	



}  
createmain();



// for(let i = 0;i < 14;i++){
//     let cell = document.createElement('div');
//     cell.classList.add('cell');
//     row.append(cell);  
// }