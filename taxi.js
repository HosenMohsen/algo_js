let musique = ["Anissa - Wejdene", 
                "Warrior - Imagine Dragon", 
                "Blue Bird - Ikimono Gakari", 
                "Enemy - ImagineDragons", 
                "Beliver - Imagine Dragons"]


let feu = 0
let taxi = 1
let santeM = 10
let personnage = "Pierre"


function trajet() {
    let radio = Math.floor((Math.random()) * 5)
    feu += 1
    console.log("La musique à la radio est " + musique[radio] + " il est à " + feu + " feu")
    if (musique[radio] == "Anissa - Wejdene") {
        santeM -= 1
        taxi += 1
    }
    if (feu == 30){
        console.log(personnage + " est arrivé à destinations avec " + taxi + " et " + santeM + " de santé mental")
    }
    if(santeM <= 0){
        console.log(personnage + " Explose boummmmmm")
    }
}

while (santeM > 0 && feu < 30){
    trajet()
}





/* let x = Math.floor((Math.random())*5)
console.log(x) */
