/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Zachary Humes
 */

/** namespace. */
var rhit = rhit || {};
var time = !!1;

// NOTE: Attempt to make night mode persistent between html documents. 

// function initiate(){
//     if(time == true){
//         document.getElementById("page").setAttribute("href", "styles/main.css");
//     }
//     else if(time == false){
//         document.getElementById("page").setAttribute("href", "styles/night.css");
//     }
// }

/* Main */
rhit.main = function () {
    // Toggles the night mode / main stylesheets using the button in the nav section on the grid
    document.querySelector("#toggle-time").onclick = (event) => {
        if(time == true){
            document.getElementById("page").setAttribute("href", "styles/night.css");
            document.getElementById("toggle-time").innerHTML = "&#9728";
            time = !time;
        }
        else if(time == false){
            document.getElementById("page").setAttribute("href", "styles/main.css");
            document.getElementById("toggle-time").innerHTML = "&#9789";
            time = !time;
        }
    };
};

// window.onload = initiate;
rhit.main();

