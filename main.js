const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');
const completedCount = document.getElementById('completed-count');
const completedCountTotal = document.getElementById("completed-count-total")
let completedTasks = 0;
let total = 0;

addBtn.addEventListener('click', (e) => {
    
    e.preventDefault();

    const text = input.value;
    

    if (text !== '') {
        const li = document.createElement('li'); 
        const p = document.createElement('p'); 
        p.textContent = text;
        total++; 
        

        const checkbox = document.createElement('input'); // Agregar checkbox
        checkbox.type = 'checkbox'; // Establecer tipo de input como checkbox
        checkbox.addEventListener('change', () => { // Escuchar evento de cambio
            if (checkbox.checked) {
                li.classList.add('completed'); // Marcar la tarea como completada
                completedTasks++; // Incrementar contador de tareas completadas
                
            } else {
                li.classList.remove('completed'); // Marcar la tarea como incompleta
                completedTasks--; // Decrementar contador de tareas completadas
                total--;
            }
            updateCompletedCount(); // Actualizar contador de tareas completadas
            updateTotalCount();
        });

        li.appendChild(checkbox); // Agregar checkbox al elemento de la lista
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li); 

        input.value = ''; 
        empty.style.display = 'none';
        completedCountTotal.textContent = total;
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button'); 

    deleteBtn.textContent = 'X'; 
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;  
        ul.removeChild(item); 
        

        if (item.classList.contains('completed')) {
            completedTasks--; // Decrementar contador de tareas completadas si la tarea se elimina y estaba marcada como completada
            total--;
            updateCompletedCount(); // Actualizar contador de tareas completadas
            updateTotalCount();
        }

        const items = document.querySelectorAll('li');

        if (items.length === 0) { 
            empty.style.display = 'block';
        }
    });

    return deleteBtn;
}

function updateTotalCount(){
    completedCountTotal.textContent = total;
}



function updateCompletedCount() {
    completedCount.textContent = completedTasks;
    
}







