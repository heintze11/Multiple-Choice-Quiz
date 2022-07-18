var clear = document.getElementById("clear");


function postHighScores (){
    let list = JSON.parse(localStorage.getItem("highScore"));

    for (let index = 0; index < list.length; index++){
        let allScores = JSON.parse(localStorage.getItem("highScore"));
        let hscore = document.createElement("li");
        
    }
}


clear.addEventListener("click", function(){
    localStorage.removeItem("highScores");
    postHighScores();
})

postHighScores();