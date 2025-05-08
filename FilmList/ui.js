function UI(){

}


UI.prototype.alertmessage = function(text,type){
    let alert = document.createElement("div");
    alert.className = type;
    alert.innerHTML = text;
    document.querySelectorAll(".card-body")[0].appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },2000);
}

UI.prototype.addFilmToUI = function(newfilm){
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
    <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newfilm.title}</td>
    <td>${newfilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>                            
    `;
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
        });
}

UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.deleteAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    while(filmList.firstElementChild !== null){ //child olduğu sürece sil 
        filmList.firstElementChild.remove();
    };
}