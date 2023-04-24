let btnAdd = document.getElementById('btnAdd');
let todolist = [];
let CheckTodo = [];
let completedTodo = [];
btnAdd.addEventListener('click', () => {
    let inputValue = document.getElementById('text').value;
    let todo = {
        name: inputValue,
        status: true
    }
  
    if (inputValue == "") {
        document.getElementById('errorOne').style.display = "block";
        document.getElementById('errorTwo').style.display = "none";
        
    }else if(CheckTodo.indexOf(inputValue.toLowerCase())>= 0){
        document.getElementById('errorTwo').style.display = "block";
        document.getElementById('errorOne').style.display = "none";
        
    }else{
        todolist.push(todo);
        CheckTodo.push(inputValue);
        document.getElementById('errorOne').style.display = "none";
        document.getElementById('errorTwo').style.display = "none";
        document.querySelector('#text').value = '';
        let newList = document.querySelector('#list');
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('todoItem');
        let nextDiv = document.createElement('div');
        nextDiv.className = 'childDiv';
        let editIcon = document.createElement('i');
        let deleteIcon = document.createElement('i');
        let task = document.createElement('input');
        task.type = "text";
        task.value = inputValue;
        task.className = 'inputV';
        task.setAttribute("readonly", "readonly");
        task.style.cursor = 'pointer';
        mainDiv.appendChild(task);
        newList.appendChild(mainDiv);
        editIcon.className = 'fa-solid fa-pen-to-square';
        nextDiv.appendChild(editIcon);
        deleteIcon.className = "fa-solid fa-trash";
        // Delete 
        deleteIcon.addEventListener('click', function () {
            let deletePost = confirm("Do to really want to delete the todo?");
            if(deletePost == true){
            mainDiv.remove();
            todolist.splice(CheckTodo.indexOf(task.value),1);
            CheckTodo.splice(CheckTodo.indexOf(task.value),1);
            }
        });
        // Edit
        editIcon.addEventListener('click', function () {
            if (editIcon.className == "fa-solid fa-pen-to-square") {
                task.removeAttribute("readonly")
                editIcon.className = 'fa-solid fa-floppy-disk';
                task.style.cursor = 'text';
               
            } else {
                task.setAttribute("readonly", "readonly");
                editIcon.className = 'fa-solid fa-pen-to-square';
                task.style.cursor = 'pointer';
                todolist.splice(todolist.indexOf(task.value),1, todo={
                    name: task.value,
                    status:true
                });
                CheckTodo.splice(todolist.indexOf(task.value),1, task.value);
                
            }
        });
        // Completed Or Not
        task.addEventListener('click', function(){
            if(task.style.textDecoration != 'line-through' && editIcon.className == "fa-solid fa-pen-to-square"){
                task.style.textDecoration = 'line-through';
                todo.status = false;
                completedTodo.push(todo);
            }else
            task.style.textDecoration = 'none';
        })
        
        nextDiv.appendChild(deleteIcon);
        mainDiv.appendChild(nextDiv);
        
        // Filter Button
        let btnFilter = document.getElementById('btnFilter');
        btnFilter.addEventListener('click',function(){
            let work = document.getElementById('selectF').value;
            if(work){
                newList.innerHTML = '';
                for(let i =0; i< completedTodo.length;i++){
                    
                 let final =`
                <input type="text" id="text" class="text" value= ${completedTodo[i].name} readonly>
          <i class="fa-solid fa-pen-to-square" ></i>
          <i class="fa-solid fa-trash" id="del" ></i>` ;
                }
                

            }
           
           
        })
        

    }
    // console.log(todolist);
    // console.log(CheckTodo);
    // console.log(completedTodo);
    console.log(finalList);
    
});







