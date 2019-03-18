
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//Starting UI Object
const ui = new UI();

// Loading all eventListeners

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        console.log("Missing field(s)");
    }
    else {
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Adding film to the UI
    }

    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}