
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//Starting UI Object
const ui = new UI();

//Creating Storage Object

const storage = new Storage();

// Loading all eventListeners

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMessages("Please fill all the blanks...","danger");
    }
    else {
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Adding film to the UI
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("The movie added successfully...","success");
    }

    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}