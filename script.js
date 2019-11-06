function createmain (){
let writingarea = document.createElement('textarea');
writingarea.classList.add('writingarea');
document.body.append(writingarea);

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

const keyboard = [
    192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
    9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
    20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
    16, 90, 88, 67, 86, 66 , 78, 77, 188, 190, 191, 38, 16, 
    17, 91, 18, 32, 18, 91, 37, 40, 39, 17
];

let keyCode = [ 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 
'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 
'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft','MetaRight', 'ArrowDown', 'ArrowRight', 'ControlRight' ];

let i = 0;
keyLayout.forEach(function keyKreation(key){
    let keyElement = document.createElement("div");
    keyElement.append(key);
    
    keyElement.classList.add(keyCode[i]);
    i++;
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

row.addEventListener("mousedown", function(event){
    let target = event.target.closest('div');
    console.log(target);
    if (target.className === 'row') return;
    target.classList.add("selected");
    writingarea.value += target.innerText;
});
row.addEventListener("mouseout", function(event){
    let target = event.target.closest('div');
    if (target.className === 'row') return;
    target.classList.remove("selected");
})   

document.addEventListener('keydown', function(event) {
    //   if (event.code === 'CapsLock') {
    //     return;
    // }
      const code = event.code;
      const codeClass = document.querySelector('.' + code);
       console.log(codeClass);
       codeClass.classList.add('selected');      
     });
     
     document.addEventListener('keyup', function(event) {
        const code = event.code;
        const codeClass = document.querySelector('.' + code);
       codeClass.classList.remove('selected');
     });
// enter  = \n
// tab = \t
// for delete  textArea.value.slice(0,textArea.length-1);
document.addEventListener('keydown', function(event) {
    writingarea.append(event.key);
    console.log(event.which);
  });
}

createmain();


