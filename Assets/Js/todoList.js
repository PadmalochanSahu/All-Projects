let btnAdd = document.getElementById('btnAdd');

let todolist = [];
btnAdd.addEventListener('click', () => {
    let inputValue = document.getElementById('text').value;
    if (inputValue == "") {
        document.getElementById('errorOne').style.display = "block";
    }else{
        document.getElementById('errorOne').style.display = "none";
        document.getElementById('errorTwo').style.display = "none";
        document.querySelector('#text').value = '';
        let newList = document.querySelector('#list');
        let mainDiv = document.createElement('div');
        let nextDiv = document.createElement('div');
        nextDiv.className = 'childDiv';
        let editIcon = document.createElement('i');
        let deleteIcon = document.createElement('i');
        mainDiv.classList.add('todoItem');
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
        deleteIcon.addEventListener('click', function () {
            let deletePost = confirm("Do to really want to delete the todo?");
            if(deletePost == true){
            mainDiv.remove();
            }
        });
        editIcon.addEventListener('click', function () {
            if (editIcon.className == "fa-solid fa-pen-to-square") {
                task.removeAttribute("readonly")
                editIcon.className = 'fa-solid fa-floppy-disk';
                task.style.cursor = 'text';
            } else {
                task.setAttribute("readonly", "readonly");
                editIcon.className = 'fa-solid fa-pen-to-square';
                task.style.cursor = 'pointer';
                
            }
        });
        task.addEventListener('click', function(){
            if(task.style.textDecoration != 'line-through' && editIcon.className == "fa-solid fa-pen-to-square"){
                task.style.textDecoration = 'line-through';
            }else
            task.style.textDecoration = 'none';
            
        })
        
        nextDiv.appendChild(deleteIcon);
        mainDiv.appendChild(nextDiv);
        
        
        let btnFilter = document.getElementById('btnFilter');
        btnFilter.addEventListener('click',function(){
            let work = document.getElementById('selectF').value;
            if(work == 'Completed'){
                console.log('complted')
            }
            else{
                console.log('uncompleted')
            }
        })
        

    }
    
    todolist.push(inputValue);
    console.log(todolist);
});







