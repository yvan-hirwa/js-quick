
const todostore= localStorage.getItem('todo');

const todo= JSON.parse(todostore) || [];

 
 displayText();


 function displayText() {
     let todolist = '';
     for (let i = 0; i < todo.length; i++) { 
         const {name, dueDate} = todo[i];
         
         todolist += `
             
              <div>${name}</div><div>${dueDate}</div>
                 <button class="js-delete" onclick="
                 todo.splice(${i}, 1);
                 localStorage.removeItem('todo');
                 displayText();
                 ">Delete</button>
         `;
         
     }
     document.querySelector('.todolist').innerHTML = todolist;
      localStorage.setItem('todo',JSON.stringify(todo));
 }
 function addText(){
 
 let name= document.querySelector('.js-field').value;
 let dueDate = document.querySelector('.js-date').value;
 if (name==='' || dueDate==='') {
     
 }
 else{
 todo.push({name,dueDate});
 }
 displayText();
 document.querySelector('.js-field').value='';
 document.querySelector('.js-date').value='';
 }
 
 