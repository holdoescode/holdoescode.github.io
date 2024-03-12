let hiddenDiv = document.getElementById("hiddenDiv");
let arrow = document.querySelector("p#arrow");

// function changeDisplay() {
    //hiddenDiv.classList.toggle("about-display");
    //hiddenDiv.classList.remove("about-hide");
//};

/* function changeDisplay() {
    if (hiddenDiv.classList.contains("about-display")) {
        hiddenDiv.classList.remove("about-display");
        hiddenDiv.classList.add("about-hide");
    }
    if (hiddenDiv.classList.contains("about-hide")) {
        hiddenDiv.classList.remove("about-hide");
        hiddenDiv.classList.add("about-display");
    }
    
} */

function changeDisplay() {
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
}

arrow.addEventListener('click', changeDisplay);