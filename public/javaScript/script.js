// Adicionar novos itens na aba de projetos
const projects = document.querySelector(".projects_section");


function loadProjects(data) {
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



function getProjects(){
    let url = '/getprojects'

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    let html = '';
        data.forEach(element => {
            console.log(element)
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
}

if (window.location.href == "http://localhost:3000/") {
    getProjects()
} else {
    loadProjects()
}
