let caractéristiques = [
    "nerd", "sportif", "geek", "blonde", "intello", "cringe", "idiot", "aigri"
]

let survivants = [
    "pierre", "antoine", "julie", "mark", "ines", "nicolas", "alexis", "elisabeth"
]

let tueur = "Jason"
let pv = 100





class survivant {

    constructor(survivants, caractéristiques, probamort, probdegat, probadegatmort){

        this.survivants = survivants

        this.caractéristiques = caractéristiques

        this.probamort = probamort

        this.probdegat = probdegat

        this.probadegatmort = probadegatmort

    }

    tour(){ 
        let luck_tuer = Math.random()
        let luck_degat_mort = Math.random()
        if (luck_tuer > this.probamort) {
            console.log("Jason a tué " + this.survivants + " il lui reste " + pv +  " point de vie")
            this.survivants == null
        }
       
        else if (luck_degat_mort > this.probadegatmort){
            pv -= 15
            console.log(this.survivants + " est mort mais a infligé 15 point de dégâts à Jason avant de mourir. " +  
            tueur + " a acutellement "  + pv)
            this.survivants == null
        }
        else if (pv <= 0){
            console.log(this.survivants + " a tué Jason" )
        }
        else{
            pv -= 10
            console.log(this.survivants + " a esquivé et a infligé 10 point de dégâts à Jason " +  tueur + " a acutellement "  + pv)
        }
}


}


/* for (let i=0; i < 5; i++){

    let capacite = Math.floor((Math.random()) * j)
    let survivor =  Math.floor((Math.random()) * j)
    let survivant1 = new survivant(survivants[survivor],caractéristiques[capacite], Math.random(),Math.random(), Math.random())


    caractéristiques.splice(capacite, 1)
    survivants.splice(survivor, 1)

    console.log(survivant1) 

    j -= 1
} */





let j = 8
let capacite = Math.floor((Math.random()) * j)
let survivor =  Math.floor((Math.random()) * j)
let survivant1 = new survivant(survivants[survivor],caractéristiques[capacite], Math.random(),Math.random(), Math.random())
caractéristiques.splice(capacite, 1)
survivants.splice(survivor, 1)
j -= 1


let capacite2 = Math.floor((Math.random()) * j)
let survivor2 =  Math.floor((Math.random()) * j)
let survivant2 = new survivant(survivants[survivor2],caractéristiques[capacite2], Math.random(),Math.random(), Math.random())
caractéristiques.splice(capacite2, 1)
survivants.splice(survivor2, 1)
j -= 1


let capacite3 = Math.floor((Math.random()) * j)
let survivor3 =  Math.floor((Math.random()) * j)
let survivant3 = new survivant(survivants[survivor3],caractéristiques[capacite3], Math.random(),Math.random(), Math.random())
caractéristiques.splice(capacite3, 1)
    survivants.splice(survivor3, 1)
j -= 1


let capacite4 = Math.floor((Math.random()) * j)
let survivor4 =  Math.floor((Math.random()) * j)
let survivant4 = new survivant(survivants[survivor4],caractéristiques[capacite4], Math.random(),Math.random(), Math.random())
caractéristiques.splice(capacite4, 1)
    survivants.splice(survivor4, 1)
j -= 1

let capacite5 = Math.floor((Math.random()) * j)
let survivor5 =  Math.floor((Math.random()) * j)
let survivant5 = new survivant(survivants[survivor5],caractéristiques[capacite5], Math.random(),Math.random(), Math.random())
caractéristiques.splice(capacite5, 1)
survivants.splice(survivor5, 1)
j -= 1






 while (pv > 0){
    

        survivant1.tour()

        survivant2.tour()

        survivant3.tour()
 
        survivant4.tour()
  
        survivant5.tour()
    }
   






