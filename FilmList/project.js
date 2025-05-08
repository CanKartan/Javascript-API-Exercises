const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const CardBody = document.querySelectorAll(".card-body")[1];
const DeleteAll = document.querySelector("#clear-films");

// Objes
const UIobje = new UI();
const Storageobje = new Storage();


eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function() {
         let films = Storageobje.getFilmToStorage();
            UIobje.loadAllFilms(films);
    });
    CardBody.addEventListener("click",deleteFilm);
    DeleteAll.addEventListener("click",deleteAllMovies);
};

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if ( title === "" || director ==="" || url === ""){
        UIobje.alertmessage("Tüm alanları doldurun...","alert alert-danger");

    }
    else{
        const newFilm = new Film(title,director,url);
        UIobje.addFilmToUI(newFilm);
        UIobje.alertmessage("Film Başarıyla Eklendi...","alert alert-success"); 
        Storageobje.addFilmToStorage(newFilm);
    }
    
    UIobje.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
};

function deleteFilm(e){
if (e.target.id === "delete-film"){
    UIobje.deleteFilmFromUI(e.target); 
    Storageobje.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UIobje.alertmessage("Seçilen Film Başarıyla Silindi...","alert alert-success");
    }

};

function deleteAllMovies(){
    if (confirm("Tüm Filmleri Silmek İstediğinize Emin Misiniz?")){
        UIobje.deleteAllFilmsFromUI();
        Storageobje.deleteAllFilmsFromStorage();
        UIobje.alertmessage("Tüm Filmler Başarıyla Silindi...","alert alert-success");
    }

};

