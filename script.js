window.onload = function(){
    const newTask = document.querySelector(".newTask");
    const modal = document.querySelector('.modal');


    newTask.addEventListener('click', function(){
        modal.style = "display : flex";
    });

    document.querySelector('.exitModal').addEventListener('click', ()=>{   
        modal.style = "display : none";
    });



};