/*<style>
body{
    font-family: Arial;
}
.input-field{
    padding: 10px;
    margin-right: 5px;
    border: 2px solid black;
    font-size: medium;
    font-weight: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
button{
    border: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 10px ;
    background-color: green;
    border-radius: 5px;
    cursor: pointer;
}

</style>
</head>
<body>
<input type="text" class="input-field js-field"><button class="js-button" onclick="addText();">Submit</button>
<div class="todolist"></div>
<script>
*/

const todo=[];

function displayText(){
let i=0;
let todolist='';
while (i<todo.length) {
    todolist = `<p>${todo[i]}</p>`;
    i++;
    
}
document.querySelector('.todolist').innerHTML+=todolist;
}
function addText(){

let text= document.querySelector('.js-field').value;
todo.push(text);
displayText();
document.querySelector('.js-field').value='';
}


//</script>
//for reference it is with html