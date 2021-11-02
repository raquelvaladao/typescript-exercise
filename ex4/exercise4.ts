//given the array from exercise 2

type Person = {
    id: string;
    name: string;
    bio: string;
}
type Input = {
    idInput: HTMLInputElement;
    nameInput: HTMLInputElement;
    bioInput: HTMLInputElement;
}
type CellsCollection = HTMLCollectionOf<HTMLTableCellElement>;

let people: Array<Person> = Array(
    {id : "1", name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : "2", name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : "3", name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : "4", name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);
const updateFormButton: HTMLButtonElement = document.getElementById('update-form-btn') as HTMLButtonElement;
const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;

setSingleButtonAvailability(updateFormButton, false);
table.addEventListener('click', deleteRow);
table.addEventListener('click', getUpdateButtonRow);
sendArrayToTable(people);

function setSingleButtonAvailability(button: HTMLButtonElement, isEnabled: boolean) {
    if(isEnabled === false){
        button.style.background = '#2e2c2c';
        button.disabled = true;
    } else {
        button.style.background = '#006eff';
        button.disabled = false;
    }
}

function checkIfFieldsAreEmpty(inputs: Input): boolean {
    if(!inputs.idInput.value || !inputs.nameInput.value || !inputs.bioInput.value){
        alert("Please fill all the fields");
        return false;
    }
    return true;
}

function checkIfIdExists(givenId: string, oldId: string): boolean {
    const ID: number = 0;
    const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;
   
    for(let i = 0; i < table.rows.length; i++){        
        const cellId = table.rows[i].cells[ID].innerHTML;
        if(cellId === givenId && cellId !== oldId){
            alert("Avoid repeated ID");
            return false;
        }
    }
    return true;
}

function deleteRow(event: any): void {
    if (!event.target.classList.contains("delete-btn")) {
      return;
    }
    const button: any = event.target;
    button.closest('tr').remove();
}
function sendArrayToTable(people: Array<Person>): void {
    const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;
    const form: HTMLFormElement = document.getElementById('update-form') as HTMLFormElement;

    people.forEach(person => {
        const row: HTMLTableRowElement = table.insertRow();
        insertInputsIntoRow(row, person);
        insertButtonsIntoRow(row);
    });
    form.reset();
}

function insertButtonsIntoRow(row: HTMLTableRowElement): void {
    const UPDATE_BTN_CELL: number = 3, DELETE_BTN_CELL: number = 4;
    let newUpdateBtn: HTMLElement = document.createElement('button') as HTMLButtonElement;
    let newDeleteBtn: HTMLElement = document.createElement('button') as HTMLButtonElement;
    
    populateButton(newDeleteBtn, 'delete-btn', 'Delete', 'delete-btn');
    populateButton(newUpdateBtn, 'update-btn', 'Update', 'update-btn');
    row.insertCell(UPDATE_BTN_CELL).appendChild(newUpdateBtn);
    row.insertCell(DELETE_BTN_CELL).appendChild(newDeleteBtn);
}

function populateButton(updateBtn: HTMLElement, id: string, name: string, className: string): void {
    updateBtn.setAttribute('id', id);
    updateBtn.setAttribute('class', className);
    updateBtn.innerHTML = name;
}

function insertInputsIntoRow(row: HTMLTableRowElement, person: Person): void {
    const ID: number = 0, NAME: number = 1, BIO: number = 2;
    
    row.insertCell(ID).innerHTML = person.id;
    row.insertCell(NAME).innerHTML = person.name;
    row.insertCell(BIO).innerHTML = person.bio;
}

function getUpdateButtonRow(event: any): void {
    if (!event.target.classList.contains("update-btn")) {
      return;
    }
    const rowIndex: number = event.target.closest('tr').rowIndex;
    updateTableRow(rowIndex);    
}

function updateTableRow(updateIndex: number): void {
    const cells: CellsCollection = table.rows[updateIndex].cells;
    const form: HTMLFormElement = document.getElementById('update-form') as HTMLFormElement;
    const updateButton: HTMLButtonElement = document.getElementById('update-form-btn') as HTMLButtonElement;
    const inputs: Input = getInputsFromForm();
    
    setButtonsAvailability(true);
    setSingleButtonAvailability(updateButton, true);
    setTableValuesIntoForm(inputs, cells);
    updateButton.onclick = function(e: Event) {
        e.preventDefault();
        if(checkIfFieldsAreEmpty(inputs) && checkIfIdExists(inputs.idInput.value, cells[0].innerHTML)){      
            setFormValuesIntoTable(cells, inputs);
            setButtonsAvailability(false);
            setSingleButtonAvailability(updateButton, false);
            form.reset();
        }
    };
}

function setFormValuesIntoTable(cell: CellsCollection, inputs: Input) {
    const ID: number = 0, NAME: number = 1, BIO: number = 2;

    cell[ID].innerHTML = inputs.idInput.value;
    cell[NAME].innerHTML = inputs.nameInput.value;
    cell[BIO].innerHTML = inputs.bioInput.value;
}

function setTableValuesIntoForm(inputs: Input, cell: CellsCollection) {
    inputs.idInput.value = cell[0].innerHTML;
    inputs.nameInput.value = cell[1].innerHTML;
    inputs.bioInput.value = cell[2].innerHTML;
}

function getInputsFromForm(): Input {
    return {
        idInput: <HTMLInputElement>document.getElementById('id-form'),
        nameInput: <HTMLInputElement>document.getElementById('name-form'),
        bioInput: <HTMLInputElement>document.getElementById('bio-form')
    };
}

function setButtonsAvailability(key: boolean): void {
    let btnGroupA: HTMLCollectionOf<Element> = document.getElementsByClassName("delete-btn");
    let btnGroupB: HTMLCollectionOf<Element> = document.getElementsByClassName("update-btn");
    
    for (let i in btnGroupA) {
        if(key == true){
            (<HTMLButtonElement>btnGroupA[i]).disabled = true;
            (<HTMLButtonElement>btnGroupB[i]).disabled = true;
        } else {
            (<HTMLButtonElement>btnGroupA[i]).disabled = false;
            (<HTMLButtonElement>btnGroupB[i]).disabled = false;
        }
    }
}