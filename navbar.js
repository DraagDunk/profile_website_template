function menuFunction() {
    let navBar = document.getElementById("navigation");
    let homeLink = document.getElementById("home-link");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        homeLink.classList.add("narrow");
    } else {
        navBar.style.display = "block";
        homeLink.classList.remove("narrow")
    }
}

function closeMenu() {
    let navBar = document.getElementById("navigation");
    let homeLink = document.getElementById("home-link");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        homeLink.classList.add("narrow");
    }
}
