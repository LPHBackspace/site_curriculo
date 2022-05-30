let darkToggle = document.querySelector(".dark");
let darkMode = document.querySelector(".dark_change");
var change = 0;

darkToggle.onclick = function() {
   

    if (change == 0){
        darkMode.classList.add("dark_mode");
        change = 1;
    } else {
        darkMode.classList.remove("dark_mode");
        change = 0;
    }
}