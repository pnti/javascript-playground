// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite('ikona','ikona1.png')

add([
    sprite('ikona'),
    pos(120, 80),
]);

let x = 0

// Dotyczy dotknięcia na 

onTouchEnd((id, pos)=>{
    debug.log(x++ + "pos: " + pos + "id: " + id)
})