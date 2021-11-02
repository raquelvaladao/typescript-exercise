//given the array from exercise 2
var people = Array({ id: "1", name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" }, { id: "2", name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" }, { id: "3", name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." }, { id: "4", name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." });
var updateFormButton = document.getElementById('update-form-btn');
var table = document.getElementById('people-table');
setSingleButtonAvailability(updateFormButton, false);
table.addEventListener('click', deleteRow);
table.addEventListener('click', getUpdateButtonRow);
sendArrayToTable(people);
function setSingleButtonAvailability(button, isEnabled) {
    if (isEnabled === false) {
        button.style.background = '#2e2c2c';
        button.disabled = true;
    }
    else {
        button.style.background = '#006eff';
        button.disabled = false;
    }
}
function checkIfFieldsAreEmpty(inputs) {
    if (!inputs.idInput.value || !inputs.nameInput.value || !inputs.bioInput.value) {
        alert("Please fill all the fields");
        return false;
    }
    return true;
}
function checkIfIdExists(givenId, oldId) {
    var ID = 0;
    var table = document.getElementById('people-table');
    for (var i = 0; i < table.rows.length; i++) {
        var cellId = table.rows[i].cells[ID].innerHTML;
        if (cellId === givenId && cellId !== oldId) {
            alert("Avoid repeated ID");
            return false;
        }
    }
    return true;
}
function deleteRow(event) {
    if (!event.target.classList.contains("delete-btn")) {
        return;
    }
    var button = event.target;
    button.closest('tr').remove();
}
function sendArrayToTable(people) {
    var table = document.getElementById('people-table');
    var form = document.getElementById('update-form');
    people.forEach(function (person) {
        var row = table.insertRow();
        insertInputsIntoRow(row, person);
        insertButtonsIntoRow(row);
    });
    form.reset();
}
function insertButtonsIntoRow(row) {
    var UPDATE_BTN_CELL = 3, DELETE_BTN_CELL = 4;
    var newUpdateBtn = document.createElement('button');
    var newDeleteBtn = document.createElement('button');
    populateButton(newDeleteBtn, 'delete-btn', 'Delete', 'delete-btn');
    populateButton(newUpdateBtn, 'update-btn', 'Update', 'update-btn');
    row.insertCell(UPDATE_BTN_CELL).appendChild(newUpdateBtn);
    row.insertCell(DELETE_BTN_CELL).appendChild(newDeleteBtn);
}
function populateButton(updateBtn, id, name, className) {
    updateBtn.setAttribute('id', id);
    updateBtn.setAttribute('class', className);
    updateBtn.innerHTML = name;
}
function insertInputsIntoRow(row, person) {
    var ID = 0, NAME = 1, BIO = 2;
    row.insertCell(ID).innerHTML = person.id;
    row.insertCell(NAME).innerHTML = person.name;
    row.insertCell(BIO).innerHTML = person.bio;
}
function getUpdateButtonRow(event) {
    if (!event.target.classList.contains("update-btn")) {
        return;
    }
    var rowIndex = event.target.closest('tr').rowIndex;
    updateTableRow(rowIndex);
}
function updateTableRow(updateIndex) {
    var cells = table.rows[updateIndex].cells;
    var form = document.getElementById('update-form');
    var updateButton = document.getElementById('update-form-btn');
    var inputs = getInputsFromForm();
    setButtonsAvailability(true);
    setSingleButtonAvailability(updateButton, true);
    setTableValuesIntoForm(inputs, cells);
    updateButton.onclick = function (e) {
        e.preventDefault();
        if (checkIfFieldsAreEmpty(inputs) && checkIfIdExists(inputs.idInput.value, cells[0].innerHTML)) {
            setFormValuesIntoTable(cells, inputs);
            setButtonsAvailability(false);
            setSingleButtonAvailability(updateButton, false);
            form.reset();
        }
    };
}
function setFormValuesIntoTable(cell, inputs) {
    var ID = 0, NAME = 1, BIO = 2;
    cell[ID].innerHTML = inputs.idInput.value;
    cell[NAME].innerHTML = inputs.nameInput.value;
    cell[BIO].innerHTML = inputs.bioInput.value;
}
function setTableValuesIntoForm(inputs, cell) {
    inputs.idInput.value = cell[0].innerHTML;
    inputs.nameInput.value = cell[1].innerHTML;
    inputs.bioInput.value = cell[2].innerHTML;
}
function getInputsFromForm() {
    return {
        idInput: document.getElementById('id-form'),
        nameInput: document.getElementById('name-form'),
        bioInput: document.getElementById('bio-form')
    };
}
function setButtonsAvailability(key) {
    var btnGroupA = document.getElementsByClassName("delete-btn");
    var btnGroupB = document.getElementsByClassName("update-btn");
    for (var i in btnGroupA) {
        if (key == true) {
            btnGroupA[i].disabled = true;
            btnGroupB[i].disabled = true;
        }
        else {
            btnGroupA[i].disabled = false;
            btnGroupB[i].disabled = false;
        }
    }
}
