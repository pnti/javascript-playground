import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom(
{
    "debug":"true"
});

loadSprite('pierwszy', '../media/ikona2.png')
loadSprite('drugi','../media/ikona3.png')

let counter = 0
let pierwszy = true

const player = add([
    sprite('pierwszy'),
    pos(100,100)
])

loop(1, ()=>{

    if(pierwszy) 
    
    {
        player.use(sprite('drugi'))
        pierwszy = false
    }
    
    else 
    
    {
        player.use(sprite('pierwszy'))
        pierwszy = true
    }

    
    debug.log(counter++)
})