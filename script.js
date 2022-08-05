let button = document.getElementById("button");
button.onclick = function () {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode"))
    {
        button.textContent = "Turn On Light Mode";
    }
    else {
        button.textContent = "Turn On Dark Mode";
    }
}