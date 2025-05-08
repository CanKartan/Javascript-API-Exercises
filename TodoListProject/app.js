
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearbutton = document.querySelector("#clear-todos");

eventlisteners();

function eventlisteners() {
    form.addEventListener("submit", addTodo);

    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);

    secondcardbody.addEventListener("click", deleteTodo);

    filter.addEventListener("keyup", filterTodos);

    clearbutton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e) {
    if (confirm("tümünü silmek istediğinize eminmisiniz ? ")) {
        while (todolist.firstElementChild != null) {
            todolist.removeChild(todolist.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    const filtervalue = e.target.value.toLowerCase();
    const listİtems = document.querySelectorAll(".list-group-item");
    listİtems.forEach(function (listItem) {
        const text = listItem.textContent.toLocaleLowerCase();
        if (text.indexOf(filtervalue) === -1) {
            listItem.setAttribute("style", "display:none !important");
        } else {
            listItem.setAttribute("style", "display:block");
        }
    });
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlertSucces("success", "Todo Başarıyla Silindi");
    }
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodotoUI(todo);
    });
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlertWarning("danger", "Lütfen Bir TODO Giriniz.");
    } else {
        addTodotoUI(newTodo);
        addTodoToStorage(newTodo);
        showAlertSucces("success", "Todo Başarıyla Eklendi...");
    }

    e.preventDefault();
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlertWarning(type, message) {
    const alert = document.createElement("div");

    alert.className = "alert alert-warning";

    alert.textContent = message;

    firstcardbody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 2000);
}

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlertSucces(type, message) {
    const alert = document.createElement("div");

    alert.className = "alert alert-success";

    alert.textContent = message;

    firstcardbody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 2000);
}

function addTodotoUI(newTodo) {
    const listItem = document.createElement("li");

    const link = document.createElement("a");

    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todolist.appendChild(listItem);

    todoInput.value = "";
}
