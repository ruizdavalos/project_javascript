const tasks=[];
let time=0;
let timer=null;

let timerBreak= null;
let current=null;

const bAdd= document.querySelector('#bAdd');
const itTask= document.querySelector('#itTask');
const form= document.querySelector('#form');

form.addEventListener('submit',e=>{ //hago una funcion anonima
    e.preventDefault(); //con esto hacemos anulamos su funcionamiento nativo, por lo que no va a enviar el formulario
    if(itTask.value !==''){
        createTask(itTask.value);
        itTask.value='';
        renderTask();
    }
})

function createTask(value){
    const newTask={
        id:(Math.random()*100).toString(36).slice(3),
        title:value,
        completed: false
    };

    tasks.unshift(newTask) //El metodo unshift agrega uno o mas elementos al inicio del array, y devuelve una nueva nueva longitud del array
}

function renderTask(){
    const html= tasks.map(task => {
        return `
            <div class="task">
                <div class="completed">${
                    task.completed 
                        ? `<span class="done">Done</span>`
                        : `<button class="start-button" data-id="${task.id}">Start</button>`
                }</div>
                <div class="title">${task.title}</div>
            </div>
        
        `;
    });


    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join(" ");
}