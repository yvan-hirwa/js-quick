
const add=function(){
    console.log(2+3);
   }
   add();
   add();

   function runtwice(f){
    f()
    f()
   }

   runtwice(function(){console.log('12b')})
   runtwice(add)


   //html button using async function setTimeout()
   function buttonClick(){
    setTimeout(function(){
        document.querySelector('.js-btn').innerHTML='Finished!'
    },1000);
    document.querySelector('.js-btn').innerHTML='Loading...'
   }
   let timeId;
   function addcart(){
    document.querySelector('.elem').innerHTML='Added';
    timeId=setTimeout(() => {
        document.querySelector('.elem').innerHTML=''
    }, 2000);
   }