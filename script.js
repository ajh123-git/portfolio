function showDetails(message) {
    alert(message);
}

function greetUser() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Please enter your name!";
    } else {
        message.innerText = "Hello " + name + "! Thanks for visiting!";
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
