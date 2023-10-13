class Pokémon {
    constructor(name, attack, defense, hp, luck) {
        this.name =  name

        this.attack = attack

        this.defense = defense

        this.hp = hp

        this.luck = luck
    }
    


   
    isLucky(){
        let random = Math.random()
        if (this.luck > random){
            return true
        } else {
            return false
        }
        
    }

    attackPokemon(adversaire) {
        if(this.isLucky()) {
        let degat = this.attack - adversaire.defense
        adversaire.hp = adversaire.hp - degat
        console.log(this.name + " a mis " + degat + " point de dégat " +  adversaire.name + " a " + adversaire.hp + " point de vie restant restant" )
        if(adversaire.hp <= 0){
            console.log(adversaire.name + " est mort " + this.name + " a battu " + adversaire.name)
    }
        /* return this.hp   */
    }
    else{
        console.log(this.name + ' a raté son attaque')
    }
}
   
    

    
}

let pokemon1 = new Pokémon("Pikachu", 24, 12, 130, 0.9)
let pokemon2 = new Pokémon("Dracofeu", 30, 8, 144, 0.8)

/* let random = Math.random()
console.log(random); */


while (pokemon1.hp >= 0 && pokemon2.hp >= 0) {
        pokemon1.attackPokemon(pokemon2)
        pokemon2.attackPokemon(pokemon1)
    
}


