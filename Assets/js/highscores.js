var clear = document.getElementById("clear");
var hslist = document.getElementById("hslist");

function postHighScores (){
    let list = JSON.parse(localStorage.getItem("highScore"));
    console.log(list);
    
        for (let i= 0; i< list.length; i++){
            console.log(list[i]);
            const initialCreation = document.createElement("li");
            initialCreation.textContent = list[i].initials + " : " + list[i].score;
            hslist.append(initialCreation);        
        }

}


clear.addEventListener("click", function(){
    localStorage.clear();
    hslist.innerHTML = "";
})

postHighScores();

