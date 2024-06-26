
const todostore= localStorage.getItem('todo');

const todo= JSON.parse(todostore) || [];

 
 displayText();


 function displayText() {
     let todolist = '';
     todo.forEach(function(value, index) {
        const {name, dueDate} = value;
         
        todolist += `
            
             <div>${name}</div><div>${dueDate}</div>
                <button class="js-delete" onclick="
                todo.splice(${index}, 1);
                localStorage.removeItem('todo');
                displayText();
                ">Delete</button>
        `;
        
     });
    /* for (let i = 0; i < todo.length; i++) { 
         const {name, dueDate} = todo[i];
         
         todolist += `
             
              <div>${name}</div><div>${dueDate}</div>
                 <button class="js-delete" onclick="
                 todo.splice(${i}, 1);
                 localStorage.removeItem('todo');
                 displayText();
                 ">Delete</button>
         `;
         
     }*/
     document.querySelector('.todolist').innerHTML = todolist;
      localStorage.setItem('todo',JSON.stringify(todo));
 }
 function addText(){
 
 let name= document.querySelector('.js-field').value;
 let dueDate = document.querySelector('.js-date').value;
 if (name==='' || dueDate==='') {
    setTimeout(() => {
        document.querySelector('.js-error').innerHTML='';
    }, 2000);

    document.querySelector('.js-error').innerHTML='Fill out the form!';
 }
 else{
 todo.push({name,dueDate});
 }
 displayText();
 document.querySelector('.js-field').value='';
 document.querySelector('.js-date').value='';
 }
 
 