let loaded = [];
let lstodo = localStorage.getItem("Todo's") ? localStorage.getItem("Todo's") : '[]';
lstodo = lstodo ? JSON.parse(lstodo): [];
for (let i = 0; i < lstodo.length; i++) {
  loaded.push(lstodo[i].name);
}
console.log(loaded);
let initial = document.getElementById("list");
for (let i = 0; i < loaded.length; i++) {
  let todo = `<div class="todoItem">
              <input type="text" class="inputV" value= "${loaded[i]}" readonly>
                <div class="childDiv">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash" id ="del"></i>
                </div>
              </div>`;
              initial.innerHTML += todo;
              deleteTodo(todo);
            }
let btnAdd = document.getElementById("btnAdd");
let todolist = [];
console.log(todolist);
let CheckTodo = [];
let completedTodo = [];
let filterTodo = [];
let uncompletedT = [];
let filterTodo2 = [];
let all = [];
btnAdd.addEventListener("click", () => {
  let inputValue = document.getElementById("text").value;
  let todo = {
    name: inputValue,
    status: true,
  };

  if (inputValue == "") {
    document.getElementById("errorOne").style.display = "block";
    document.getElementById("errorTwo").style.display = "none";
  } else if (CheckTodo.indexOf(inputValue.toLowerCase()) >= 0 || (loaded.indexOf(inputValue.toLowerCase()) >= 0)) {
    document.getElementById("errorTwo").style.display = "block";
    document.getElementById("errorOne").style.display = "none";
  } else {
    todolist.push(todo);
    uncompletedT.push(todo);
    CheckTodo.push(inputValue.toLowerCase());
    document.getElementById("errorOne").style.display = "none";
    document.getElementById("errorTwo").style.display = "none";
    document.querySelector("#text").value = "";
    let newList = document.querySelector("#list");
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("todoItem");
    let nextDiv = document.createElement("div");
    nextDiv.className = "childDiv";
    let editIcon = document.createElement("i");
    let deleteIcon = document.createElement("i");
    let task = document.createElement("input");
    task.type = "text";
    task.value = inputValue;
    task.className = "inputV";
    task.setAttribute("readonly", "readonly");
    task.style.cursor = "pointer";
    mainDiv.appendChild(task);
    newList.appendChild(mainDiv);
    editIcon.className = "fa-solid fa-pen-to-square";
    nextDiv.appendChild(editIcon);
    deleteIcon.className = "fa-solid fa-trash";
    // Delete
      deleteIcon.addEventListener("click", function () {
        let deletePost = confirm("Do to really want to delete the todo?");
        if (deletePost == true) {
          mainDiv.remove();
          todolist.splice(CheckTodo.indexOf(task.value), 1);
          CheckTodo.splice(CheckTodo.indexOf(task.value), 1);
          loaded.splice(CheckTodo.indexOf(task.value), 1);
          todoList = JSON.stringify(todolist);
          localStorage.setItem("Todo's", todoList);
        }
      });
    
    // Edit
    editIcon.addEventListener("click", function () {
      if (editIcon.className == "fa-solid fa-pen-to-square") {
        task.removeAttribute("readonly");
        editIcon.className = "fa-solid fa-floppy-disk";
        task.style.cursor = "text";
      } else if (CheckTodo.indexOf(task.value.toLowerCase()) >= 0) {
        document.getElementById("errorTwo").style.display = "block";
        task.style.textDecoration = "underline";
        task.style.color = "red";
      } else {
        document.getElementById("errorTwo").style.display = "none";
        task.style.color = "black";
        task.setAttribute("readonly", "readonly");
        editIcon.className = "fa-solid fa-pen-to-square";
        task.style.cursor = "pointer";
        todolist.splice(
          todolist.indexOf(task.value),
          1,
          (todo = {
            name: task.value,
            status: true,
          })
        );
      }
      CheckTodo.splice(todolist.indexOf(task.value), 1, task.value);
    });
  
    // Completed Or Not
    task.addEventListener("click", function () {
      if (
        task.style.textDecoration != "line-through" &&
        editIcon.className == "fa-solid fa-pen-to-square"
      ) {
        task.style.textDecoration = "line-through";
        todo.status = false;
        uncompletedT.splice(todo, 1);
        completedTodo.push(todo);
      } else {
        task.style.textDecoration = "none";
        todo.status = true;
        uncompletedT.push(todo);
      }
    });

    nextDiv.appendChild(deleteIcon);
    mainDiv.appendChild(nextDiv);

    // Filter Button
    let btnFilter = document.getElementById("btnFilter");
    btnFilter.addEventListener("click", function () {
      let work = document.getElementById("selectF").value;
      if (work == "All") {
        all = [];
        newList.innerHTML = "";
        for (let i = 0; i < todolist.length; i++) {
          let todo = `<div class="todoItem">
          <input type="text" class="inputV" value= "${todolist[i].name}" readonly>
          <div class="childDiv">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash" id="del" ></i>
          </div>
          </div>`;
          all.push(todo);
        }
        newList.innerHTML = all.join("");
        deleteTodo(todo);
      } else if (work == "Completed") {
        newList.innerHTML = "";
        filterTodo = [];
        for (let i = 0; i < completedTodo.length; i++) {
          let todo = `<div class="todoItem">
          <input type="text" class="inputV" value= "${completedTodo[i].name}" readonly style="text-decoration:line-through">
          <div class="childDiv">
          <i class="fa-solid fa-trash" id="del" ></i>
          </div>
          </div>`;
          filterTodo.push(todo);
        }
        newList.innerHTML = filterTodo.join("");
        deleteTodo();
      } else if (work == "Uncompleted") {
        newList.innerHTML = "";
        filterTodo2 = [];
        for (let i = 0; i < uncompletedT.length; i++) {
          todo= `<div class="todoItem">
          <input type="text" class="inputV" value= "${uncompletedT[i].name}" readonly>
          <div class="childDiv">
          <i class="fa-solid fa-trash" id="del" ></i>
          </div>
          </div>`;
          filterTodo2.push(todo);
        }
        newList.innerHTML = filterTodo2.join("");
      }
    });
  }
  let todoList = JSON.stringify(todolist);
  localStorage.setItem("Todo's", todoList);
});

function deleteTodo(todo){
  let delIcon = document.querySelectorAll('.fa-trash');
  delIcon.forEach((element,i) => {
    element.addEventListener('click', function(){
      let deletePost = confirm("Do to really want to delete the todo?");
      if (deletePost == true) {
        let gopu = (todo,i)
        loaded.splice(gopu,1);
        todolist.splice(gopu,1);
        completedTodo.splice(gopu,1);
        uncompletedT.splice(gopu,1);
        todoList = JSON.stringify(todolist);
        localStorage.setItem("Todo's", todoList);
        location.reload();
      }
    })
  });  
}


