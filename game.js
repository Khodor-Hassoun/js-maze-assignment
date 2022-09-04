gameStart = false
// document.addEventListener("DOMContentLoaded", function () {
//     const star = document.getElementById("start")
//     const end = document.getElementById("end")
//     const boundries = document.getElementsByClassName("boundary")
//     const scoreSheet = document.getElementsByClassName("example")
//     startGame(star)
//     loseParam(boundries)
//     endGame(end)
//     });

// function gameStart(){

// }
let score = 0
isStart = false
const star = document.getElementById("start")
const end = document.getElementById("end")
const boundries = document.getElementsByClassName("boundary")
const scoreSheet = document.querySelector(".example")
scoreSheet.innerHTML = `score = ${score}`

//Game Start
star.addEventListener('click', function(){
    isStart = true
    score = 0
    changeColor(boundries,'#eeeeee')
    scoreSheet.innerHTML = `score = ${score}`
})

end.addEventListener('mouseover', function(){
    if(isStart){
        score = 5
        isStart = false
        changeColor(boundries,'green')
        scoreSheet.innerHTML = `score = ${score}`
    }
})
//Check boundries
for(boundry of boundries){
    boundry.addEventListener('mouseover', function(){
        if(isStart){
            score = -10
            isStart = false
            changeColor(boundries,'red')
            scoreSheet.innerHTML = `score = ${score}`

        }
        
    })
}
function changeColor(array, color){
    for (let i = 0; i< boundries.length-1; i++){
            boundries[i].style.backgroundColor = color;
        }
}
// if(score == -10){
//     for (let i = 0; i< boundries.length-1; i++){
//         boundries[i].style.color = "red";
//     }
// }
