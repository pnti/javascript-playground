// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

/*
    Dotknięcie ikony ma zmieniać obrazek
*/

loadSprite('ikona2','../media/ikona2.png')
loadSprite('ikona3','../media/ikona3.png')

const ikona = add([
    sprite('ikona2'),
    pos(120, 80),
    area()
]);

let x = 0
let pierwsza = true

// Dotknięcie przycisku sprawdza się za pomocą metody hasPoint(pos)
// https://www.youtube.com/watch?v=sB4Oq8D3p2c&t=117s
// (UWAGA: Mysz trzeba obsłużyć oddzielnie)

onTouchEnd((id, pos)=>{

    if(ikona.hasPoint(pos) && pierwsza)

    {
        ikona.use(sprite('ikona3'))
        pierwsza = false
    }

    else if(ikona.hasPoint(pos))

    {
        ikona.use(sprite('ikona2'))
        pierwsza = true
    }

    debug.log(x++ + " pos: " + pos + " id: " + id)
})