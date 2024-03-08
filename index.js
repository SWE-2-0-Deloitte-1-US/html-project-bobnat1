let navBar = document.querySelectorAll(".nav-link");

function changeToActive(element){
    element.addEventListener("click", () => {
        element.classList.toggle("active");
        console.log("Switching Classes");
    })
}

// changeToActive(navBar);
navBar.forEach(changeToActive);