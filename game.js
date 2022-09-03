// const star = document.getElementById("start")
// const end = document.getElementById("#end")
// const boundries = document.getElementsByClassName(".boundary")
document.addEventListener("DOMContentLoaded", function () {
    const star = document.getElementById("start")
    const end = document.getElementById("end")
    const boundries = document.getElementsByClassName("boundary")
    star.addEventListener('click',()=>{
        console.log("working ?")
    });
    mouseOver(boundries)


})
function mouseOver(array){
    // array = document.getElementsByClassName(".boundary")
    for (element of array){
        element.addEventListener('mouseover',()=>{
            // lost = true
            console.log('lost')
        })

    }
}