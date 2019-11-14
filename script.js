var start = prompt("would you like you play a game?"); 
let health = 30; 
let winner=""
let roundsWon=0
if (start == 'yes') {
    alert("You have been challenged to a duel. You must now fight to the death with a giant chicken whose name is Grant the almighty, King of the chickens, ruler of the coop, master of the flightless");
     name = prompt("what is your name");
    
} else {
}
/**
 * no paramaters
 * function intiates grants health, then runs a random number selctor to pick 1 or 2 
 * then subtracts them from player and grant in a turn based manor logging it to the console during each iteration.
 * fuction add 1 ro rounds won each time gratns health hits 0. If players health hits 0 before grants it ends and cliams grant the winner 
 */


function round() {
    let grantsHealth = 10
    while (grantsHealth !== 0 || health !== 0){
            grantsHealth = grantsHealth - Math.floor( Math.random() * 2 + 1)
            health = health - Math.floor( Math.random() * 2 + 1)
            console.log(`grants health is  ${grantsHealth}`) 
            console.log(name+"'s health is "+health)
            if (grantsHealth <= 0){
                roundsWon= roundsWon +1
                console.log(roundsWon)
           //     round();
                return;
            } else if (health <= 0){
                winner = "grant"
                console.log(`the winner is ${winner} Grant says GGEZ.`)
                break;
            }else{
                ;
            }
    }

}
/**
 * game function takes function round and applies
 *  it to a while loop that runs it until user hits 3 wins then ends to claim user victorius.
 * also breaks if grant wins. game runs by just runinng game function.
 */
function game(){
    while (winner !== "grant" || winner !== name){
        round();
        if (roundsWon === 3){
             winner = name;
            console.log( winner +" You are the winner, you should hit Grant with that GGEZ")
            break;
        }else if (winner==="grant"){
        return
        }
    }
}

game()
