const currentDay = document.getElementById("currentDay");

var today = moment().format("dddd, MMMM Do");

currentDay.textContent = today;

const save9 = document.getElementById("save9");
const save10 = document.getElementById("save10");
const save11 = document.getElementById("save11");
const save12 = document.getElementById("save12");
const save13 = document.getElementById("save13");
const save14 = document.getElementById("save14");
const save15 = document.getElementById("save15");
const save16 = document.getElementById("save16");
const save17 = document.getElementById("save17");
const todo9 = document.getElementById("todo9");
const todo10 = document.getElementById("todo10");
const todo11 = document.getElementById("todo11");
const todo12 = document.getElementById("todo12");
const todo13 = document.getElementById("todo13");
const todo14 = document.getElementById("todo14");
const todo15 = document.getElementById("todo15");
const todo16 = document.getElementById("todo16");
const todo17 = document.getElementById("todo17");
const inform = document.getElementById("inform");
const informString = "Appointment added to local storage✅";

function addInformString(){
    inform.textContent = informString

    informTime = setInterval(() => {
        inform.textContent = "";
    }, 2550);
}

// Once a save button is clicked, it will store the 
save9.onclick = function (){
    const todoText = todo9.children[0].value;
    localStorage.setItem(todo9.dataset["todo"], todoText);
    addInformString();
};

function setTodo9(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 9){
            todo9.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo9();

// For timeblock 10am
save10.onclick = function (){
    const todoText = todo10.children[0].value;
    localStorage.setItem(todo10.dataset["todo"], todoText);
    addInformString();
};

function setTodo10(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 10){
            todo10.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo10();

// For timeblock 11am
save11.onclick = function (){
    const todoText = todo11.children[0].value;
    localStorage.setItem(todo11.dataset["todo"], todoText);
    addInformString();
};

function setTodo11(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 11){
            todo11.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo11();

// For timeblock 12pm
save12.onclick = function (){
    const todoText = todo12.children[0].value;
    localStorage.setItem(todo12.dataset["todo"], todoText);
    addInformString();
};

function setTodo12(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 12){
            todo12.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo12();

// For timeblock 1pm
save13.onclick = function (){
    const todoText = todo13.children[0].value;
    localStorage.setItem(todo13.dataset["todo"], todoText);
    addInformString();
};

function setTodo13(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 13){
            todo13.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo13();

// For timeblock 2pm
save14.onclick = function (){
    const todoText = todo14.children[0].value;
    localStorage.setItem(todo14.dataset["todo"], todoText);
    addInformString();
};

function setTodo14(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 14){
            todo14.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo14();

// For timeblock 3pm
save15.onclick = function (){
    const todoText = todo15.children[0].value;
    localStorage.setItem(todo15.dataset["todo"], todoText);
    addInformString();
};

function setTodo15(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 15){
            todo15.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo15();

// For timeblock 4pm
save16.onclick = function (){
    const todoText = todo16.children[0].value;
    localStorage.setItem(todo16.dataset["todo"], todoText);
    addInformString();
};

function setTodo16(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 16){
            todo16.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo16();

// For timeblock 5pm
save17.onclick = function (){
    const todoText = todo17.children[0].value;
    localStorage.setItem(todo17.dataset["todo"], todoText);
    addInformString();
};

function setTodo17(){
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == 17){
            todo17.children[0].value = localStorage.getItem(localStorage.key(i))
        }
    }
}

setTodo17();

// Function to set up a background color of todo text box.
const todoObject = document.getElementsByClassName("todo");
const hours = moment().format("H");
console.log(todoObject[0]);
console.log(todoObject[8])
// console.log(moment().format("H"));
function todoBackgroundColor(){
    for (let i = 0; i < todoObject.length; i++){
        if (todoObject[i].dataset["todo"] < hours){
            todoObject[i].setAttribute("style", "background-color: #d3d3d3");
            console.log(todoObject[i].dataset["todo"]);
            console.log(hours);
        } else if (hours == todoObject[i].dataset["todo"]){
            todoObject[i].setAttribute("style", "background-color: #ff6961");
        } else if (todoObject[i].dataset["todo"] > hours){
            todoObject[i].setAttribute("style", "background-color: #77dd77");
            console.log(todoObject[i].dataset["todo"]);
            console.log(hours);
        }
    }
}

todoBackgroundColor();
