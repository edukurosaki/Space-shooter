const yourShip = document.querySelector('.playerShoter');
const playerArea = document.querySelector('#play-area');


// Movimento e tiro da nave
function yourShip(event) {
    if (event.key === "arrowUp") {
     event.preventDefault();
     moveUp();   
    }else if (event.key === "arrowDown") {
        event.preventDefault();
        moveDown();
        
    } else if (event.key === ""){
        event.preventDefault();
        firstFire();
    }
}