

let def_tour = 0
let att_tour = 0

 let equipealeatoire = Math.floor((Math.random()) * 2)
 let joueuraleatoire = Math.floor((Math.random()) * 5)


 let attaquants = [
    "Jett_att",
    "Omen_att", 
    "Chamber_att",
    "Fade_att",
    "Pheonix_att"
]

let defenseurs = [
    "Jett_def",
    "Omen_def", 
    "Chamber_def",
    "Fade_def",
    "Pheonix_def"
]



    function spike(){
        if(attaquants.length > defenseurs.length){
            if ( Math.random() > 0.4){
                return true
            }
        }
        if (defenseurs.length > attaquants.length) {
            if (Math.random() > 0.6){
                return true
            }
        }
        else{
            return false
        }
    }


    function duelatt(){
        let random = Math.random()
        let random2 = Math.random()
        if (spike() == true){
            if(random >= 0.3){
                return true
            }
        }   else{
            return false
        }
            if(random2 >= 0.5){
                return true
                }
                else{
                    return false
                }
            }

      
        


    function dueldef(){
        var duel = false
        let random = Math.random()
        let random2 = Math.random()
        if (spike() == true){
            if(random >= 0.7){
                 duel = true
            }
        }   else{
             duel = false
        }
            if(random2 >= 0.5){
                 duel = true
                }   else{
                     duel = false
                }
            }
    

    function manche(){
        
        let attaquants = [
            "Jett_att",
            "Omen_att", 
            "Chamber_att",
            "Fade_att",
            "Pheonix_att"
        ]
        
        let defenseurs = [
            "Jett_def",
            "Omen_def", 
            "Chamber_def",
            "Fade_def",
            "Pheonix_def"
        ]

        let joueuraleatoireatt = Math.floor((Math.random()) * attaquants.length)
        let joueuraleatoiredef = Math.floor((Math.random()) * defenseurs.length)

        if (equipealeatoire == 0){
            console.log(attaquants[joueuraleatoire] + " a tué " + defenseurs[joueuraleatoiredef])
            defenseurs.splice([joueuraleatoiredef], 1)
            
        
        

            spike()
            if(spike() == true){
                console.log("Le spike a été planté")
            } else{
                console.log("Les attanquants n'ont pas réussi à poser le spike")
            }
         
            
        }
        if  (equipealeatoire == 1){
            console.log(defenseurs[joueuraleatoire] + " a tué " + attaquants[joueuraleatoireatt])
            attaquants.splice([joueuraleatoireatt], 1)
       

         

            spike()
            if(spike() == true){
                console.log("Le spike a été planté")
            } else{
                console.log("Les attanquants n'ont pas réussi à poser le spike")
            }
    
        }

 
 

 

        while(defenseurs.length != 0 && attaquants.length != 0){ 


        let joueuraleatoireatt = Math.floor((Math.random()) * attaquants.length )
        let joueuraleatoiredef = Math.floor((Math.random()) * defenseurs.length )
           

        if(joueuraleatoireatt == 1 ){
            joueuraleatoireatt = 0
        }

           duelatt()
       
            
           
                console.log(attaquants[joueuraleatoireatt] + " a tué " + defenseurs[joueuraleatoiredef] )
                defenseurs.splice([joueuraleatoiredef], 1)
    
            
           
            console.log( " le nombre de defenseur en vie est de " + defenseurs.length)

            if (defenseurs.length == 0 ){
                att_tour += 1
                console.log("L'attaque à gagner la manche il y'a " + att_tour + " à " + def_tour)
            }

            if(joueuraleatoiredef == 1) {
                joueuraleatoiredef = 0
            }

        
            dueldef() 
           
          
                console.log(defenseurs[joueuraleatoiredef] + " a tué " + attaquants[joueuraleatoireatt] )
                attaquants.splice([joueuraleatoireatt], 1)
          
            
            
            console.log( " le nombre d'attanquant en vie est de " + attaquants.length)

            if (attaquants.length == 0 ){
                def_tour += 1
                console.log("La défense à gagner la manche il y'a " + def_tour + " à " + att_tour)
            }
            
        
    }
            
           

      
        

            if (att_tour == 13){
                console.log("les attaquant ont gagné " + att_tour + " à " + def_tour + " la partie est terminée gg wp")
            }
            
            if (def_tour == 13){
                console.log("les défenseur ont gagné " + def_tour + " à " + att_tour + " la partie est terminée gg wp")
            }
        

     } 

     while (def_tour != 13 && att_tour != 13){
       manche()
       
       
    } 
 
