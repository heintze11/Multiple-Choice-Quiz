var clear = document.getElementById("clear");

function postHighScores (){
    let list = JSON.parse(localStorage.getItem("highScore"));

    for (let index = 0; index < list.length; index++){
        let initials = JSON.parse(localStorage.list("initials"));
        
    }
}


clear.addEventListener("click", function(){
    localStorage.removeItem("highScores");
    postHighScores();
})