//Script adds event handlers to each individual project card on the Project page - when user hovers over a project, the block changes darker and displays a title

//TO-DO:
//MAKE APPLY TO ALL PROJECT CARDS

// Mouseover & mouseleave event handlers - each project div on page
document.getElementById('react-defecit-calc').addEventListener("mouseover", onMouseOverProjects)

document.getElementById('react-defecit-calc').addEventListener("mouseleave", onMouseLeaveProjects);


// Variables for outer div element, background image and text to display on mouse over
let element = document.getElementById('react-defecit-calc');
let title = document.getElementById('defecit-title');
let image = document.getElementById('defecit-image');


const Projects = {
    defecitTitle: "<h3>Calorie Defecit Calculator</h3>",
    defecitDescription: "<p>Calorie Defecit Calculator built with React</p>"
}

// MOUSEOVER EVENT HANDLER - WHEN MOUSE ENTERS DIV
function onMouseOverProjects() {
    title.innerHTML = "Built With React";
    
    
};

// MOUSELEAVE EVENT HANDLER - WHEN MOUSE LEAVES DIV
function onMouseLeaveProjects() {
    title.innerHTML = "Calorie Defecit Calculator";
}