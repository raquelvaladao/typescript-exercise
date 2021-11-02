//given the array from exercise 2
const submit: HTMLElement = document.getElementById('insert-btn');
const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;

submit.addEventListener('click', (event:Event) => {
    let givenId: number = parseInt((<HTMLInputElement>document.getElementById('id-form')).value);
    
    event.preventDefault();
    if(checkIfFieldsAreEmpty()) {
        if(checkIfIdExists(givenId)){
            insertIntoTable();
        }
    }
});
table.addEventListener('click', deleteRow);
table.addEventListener('click', getUpdateButtonRow);

function checkIfFieldsAreEmpty(): boolean {
    let idInput: string = (<HTMLInputElement>document.getElementById('id-form')).value;
    let nameInput: string = (<HTMLInputElement>document.getElementById('name-form')).value;
    let bioInput: string = (<HTMLInputElement>document.getElementById('bio-form')).value;
    if(!idInput || !nameInput || !bioInput){
        alert("Please fill all the fields");
        return false;
    }
    return true;
}

function checkIfIdExists(givenId: number): boolean {
    const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;
   
    for(let i = 0; i < table.rows.length; i++){        
        if(table.rows[i].cells[0].innerHTML == String(givenId)){
            alert("Avoid repeated ID");
            return false;
        }
    }
    return true;
}

function insertIntoTable(): void {
    const table: HTMLTableElement = document.getElementById('people-table') as HTMLTableElement;
    const row: HTMLTableRowElement = table.insertRow();
    
    insertInputsIntoRow(row);
    insertButtonsIntoRow(row);
    alert("Person successfully added!");
}

function insertInputsIntoRow(row: HTMLTableRowElement): void {
    const ID_CELL: number = 0, NAME_CELL: number = 1, BIO_CELL: number = 2;
    let idInput: HTMLInputElement = (document.getElementById('id-form') as HTMLInputElement);
    let nameInput: HTMLInputElement = (document.getElementById('name-form') as HTMLInputElement);
    let bioInput: HTMLInputElement = (document.getElementById('bio-form') as HTMLInputElement);

    row.insertCell(ID_CELL).innerHTML = idInput.value;
    row.insertCell(NAME_CELL).innerHTML = nameInput.value;
    row.insertCell(BIO_CELL).innerHTML = bioInput.value;
    clearInputFields(idInput, nameInput, bioInput);
}

function clearInputFields(id: HTMLInputElement, name: HTMLInputElement, bio: HTMLInputElement) {
    id.value = "";
    name.value = "";
    bio.value = "";
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

function deleteRow(event: any): void {
    if (!event.target.classList.contains("delete-btn")) {
      return;
    }
    const button: any = event.target;
    button.closest('tr').remove();
}

function getUpdateButtonRow(event: any): void {
    if (!event.target.classList.contains("update-btn")) {
      return;
    }
    const rowIndex: number = event.target.closest('tr').rowIndex;
    updateTableRow(rowIndex);    
}

function updateTableRow(index: number): void {
    const ID: number = 0, NAME: number = 1, BIO: number = 2;
    let idInput: HTMLInputElement = (document.getElementById('id-form') as HTMLInputElement);
    let nameInput: HTMLInputElement = (document.getElementById('name-form') as HTMLInputElement);
    let bioInput: HTMLInputElement = (document.getElementById('bio-form') as HTMLInputElement);
    let cell: HTMLCollectionOf<HTMLTableCellElement> = table.rows[index].cells;
    
    const insertFormButton: HTMLElement = document.getElementById('insert-btn');
    const divToAppendButton: HTMLDivElement = <HTMLDivElement>document.getElementById('insert-or-update');
    const allDeleteButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("delete-btn");
    const allUpdateButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("update-btn");
    let newUpdateButton: HTMLElement = document.createElement('button') as HTMLButtonElement;

    populateButton(newUpdateButton, "update-btn", "Update", "update-form-class");
    idInput.value = cell[ID].innerHTML;
    nameInput.value = cell[NAME].innerHTML;
    bioInput.value = cell[BIO].innerHTML;
    insertFormButton.remove();
    setButtonsAvailability(allDeleteButtons, allUpdateButtons, true);
    divToAppendButton.appendChild(newUpdateButton);
    newUpdateButton.onclick = function () {
        if(checkIfIdExists(parseInt(idInput.value))){      
            cell[ID].innerHTML = idInput.value;
            cell[NAME].innerHTML = nameInput.value;
            cell[BIO].innerHTML = bioInput.value;
            clearInputFields(idInput, nameInput, bioInput);
            newUpdateButton.remove();
            divToAppendButton.appendChild(insertFormButton);
            setButtonsAvailability(allDeleteButtons, allUpdateButtons, false);
        }
    }
}

function populateButton(updateBtn: HTMLElement, id: string, name: string, className: string): void {
    updateBtn.setAttribute('id', id);
    updateBtn.setAttribute('class', className);
    updateBtn.innerHTML = name;
}

function setButtonsAvailability(btnGroupA: HTMLCollectionOf<Element>, btnGroupB:HTMLCollectionOf<Element>, key: boolean): void {
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