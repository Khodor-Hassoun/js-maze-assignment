document.addEventListener("DOMContentLoaded", gameLaunch)


function gameLaunch(){
    let score = 0;
    isStart = false;
    const star = document.getElementById("start");
    const end = document.getElementById("end");
    const boundries = document.getElementsByClassName("boundary");
    const scoreSheet = document.querySelector(".example");
    const container = document.getElementById("game")
    // scoreSheet.innerHTML = `score = ${score}`;

    //Game Start
    star.addEventListener("click", function () {
      isStart = true;
      score = 0;
      changeColor(boundries, "#eeeeee");
      scoreSheet.innerHTML = `score = ${score}`;
    });

    end.addEventListener("mouseover", function () {
      if (isStart) {
        score = 5;
        isStart = false;
        changeColor(boundries, "green");
        scoreSheet.innerHTML = `score = ${score}`;
      }
    });
    //Check boundries
    for (boundry of boundries) {
      boundry.addEventListener("mouseover", function () {
        if (isStart) {
          score = -10;
          isStart = false;
          changeColor(boundries, "red");
          scoreSheet.innerHTML = `score = ${score}`;
        }
      });
    }
    function changeColor(array, color) {
      for (let i = 0; i < array.length - 1; i++) {
        array[i].style.backgroundColor = color;
      }
    }
}