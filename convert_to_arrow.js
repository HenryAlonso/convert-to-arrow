// FUNCTION 1
    // document.getElementById("button").onclick = function() {
    //     setBackgroundColorById("paragraph", "blue");
    // }
//ARROW FUNCTION
document.getElementById("button").onclick = () => {
    setBackgroundColorById("paragraph", "blue");
}

//FUNCTION 2
    // document.getElementById("alert").onclick = function(){
    //     alert(document.getElementById("popup-input").value);
    // }
//ARROW FUNCTION
document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}

//FUNCTION 3
    // document.getElementById("hover-this").onmouseover = function(){
    //     setBackgroundColorById("body", "red");
    // }
//ARROW FUNCTION
document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "red");
}

//FUNCTION 4
    // document.getElementById("hover-this").onmouseout = function(){
    //     setBackgroundColorById("body", "white");
    // }
//ARROW FUNCTION
document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
}

//FUNCTION 5
    // function getValueFromId(id){
    //     return document.getElementById(id).value;
    // }
//ARROW FUNCTION
const getValueFromId = id => document.getElementById(id).value;


//FUNCTION 6
    // function setBackgroundColorById(id, color){
    //     document.getElementById(id).style = "background-color: " + color;
    // }
//ARROW FUNCTION
const setBackgroundColorById = (id, color) => {
    document.getElementById(id).style="background-color: " + color;
}

//FUNCTION 7
    // function mouseOverFunction(el){
    //     el.style = "background-color: black";
    // }
//ARROW FUNCTION
const mouseOverFunction = el => {
    el.style= "background-color: black";
}
