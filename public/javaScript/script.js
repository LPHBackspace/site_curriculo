// Adicionar novos itens na aba de projetos
const projects = document.querySelector(".projects_section");

let darkToggle = document.querySelector(".dark");
let darkMode = document.querySelector(".dark_change");
var change = 0;


load_functions();



function load_functions(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
}

darkToggle.onclick = function() {
   

    if (change == 0){
        darkMode.classList.add("dark_mode");
        change = 1;
    } else {
        darkMode.classList.remove("dark_mode");
        change = 0;
    }
}

function loadJSON(){
    fetch('javaScript/data.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <div class="projects">
                <div class="project">
                    <img src="${element.image}">
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                    <a href="${element.link}" target="_blank"><button type="button" >Acessar projeto</button></a>
                </div>
            </div>
            `;

        });
        projects.innerHTML = html;
    })
}