//list all from array

const peopleList: Array<People> = Array(
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);


const submit: HTMLElement = document.getElementById('insert-btn');

submit.addEventListener('click', (event:Event) => {
    event.preventDefault();
    insertToTable();
})

insertToTable();

function insertToTable() {
    const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;
    const row: HTMLTableRowElement = table.insertRow();
    const idCol: HTMLTableCellElement = row.insertCell();
    const nameCol: HTMLTableCellElement = row.insertCell();
    const bioCol: HTMLTableCellElement = row.insertCell();
    const updateBtnCell: HTMLTableCellElement = row.insertCell();
    const deleteBtnCell: HTMLTableCellElement = row.insertCell();
    let updateBtn: HTMLElement = document.createElement('button') as HTMLButtonElement;
    let deleteBtn: HTMLElement = document.createElement('button') as HTMLButtonElement;
    setButtonsIntoTable();

    

    idCol.innerHTML = "23";
    nameCol.innerHTML = "Nome";
    bioCol.innerHTML = "Descrição";
    updateBtnCell.appendChild(updateBtn);
    deleteBtnCell.appendChild(deleteBtn);



    function setButtonsIntoTable() {
        updateBtn.setAttribute('id', 'update-btn');
        updateBtn.appendChild(document.createTextNode('Update'));
        deleteBtn.setAttribute('id', 'delete-btn');
        deleteBtn.appendChild(document.createTextNode('Delete'));
    }
}
