const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#Form");
const SerachInput = document.querySelector("#formInput");
const ButtonWrapper = document.querySelector(".button-wrapper");
const SearchButton = document.querySelector("#serachButton");
const ClearButton = document.querySelector("#clearButton");
const CreateIMG = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
    ClearButton.addEventListener("click", clearUI)
}

function search(e) {
    e.preventDefault();
    const SearchInputvalue = SerachInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${SearchInputvalue}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID APIKEY"
        }
    })
        .then((res) => res.json())
        .then((data) => [
            Array.from(data.results).forEach((image) => {
                addtoUI(image.urls.small);
            })
        ])
        .catch((err) => console.log(err))
}

function addtoUI(url) {
    const div = document.createElement("div");
    div.classList = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.width = "400"
    img.height = "400"
    div.appendChild(img)
    CreateIMG.appendChild(div);
}

// function errUI(err) {
//     const div = document.createElement("div");
//     div.classList = "errcard";

//     const alert = document.createElement("h1");
//     alert.innerText = "Veri alınırken bir hata yaşandı";
//     div.appendChild(alert)
//     CreateIMG.appendChild(div);
// }

function clearUI() {
    SerachInput.value = "";
    CreateIMG.innerHTML = "";
}