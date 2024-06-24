const todo=[{
    name:'',
    dueDate:''
 }];
 
 function displayText() {
     let todolist = '';
     for (let i = 1; i < todo.length; i++) { 
         const {name, dueDate} = todo[i];
         
         todolist += `
             
              <div>${name}</div><div>${dueDate}</div>
                 <button class="js-delete" onclick="
                 todo.splice(${i}, 1);
                 displayText();
                 ">Delete</button>
         `;
         
     }
     document.querySelector('.todolist').innerHTML = todolist;
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
 
 