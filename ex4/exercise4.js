//given the array from exercise 2
var submit = document.getElementById('insert-btn');
var table = document.getElementById('people-table');
submit.addEventListener('click', function (event) {
    var givenId = parseInt(document.getElementById('id-form').value);
    event.preventDefault();
    if (checkIfFieldsAreEmpty()) {
        if (checkIfIdExists(givenId)) {
            insertIntoTable();
        }
    }
});
table.addEventListener('click', deleteRow);
table.addEventListener('click', getUpdateButtonRow);
function checkIfFieldsAreEmpty() {
    var idInput = document.getElementById('id-form').value;
    var nameInput = document.getElementById('name-form').value;
    var bioInput = document.getElementById('bio-form').value;
    if (!idInput || !nameInput || !bioInput) {
        alert("Please fill all the fields");
        return false;
    }
    return true;
}
function checkIfIdExists(givenId) {
    var table = document.getElementById('people-table');
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].innerHTML == String(givenId)) {
            alert("Avoid repeated ID");
            return false;
        }
    }
    return true;
}
function insertIntoTable() {
    var table = document.getElementById('people-table');
    var row = table.insertRow();
    insertInputsIntoRow(row);
    insertButtonsIntoRow(row);
    alert("Person successfully added!");
}
function insertInputsIntoRow(row) {
    var ID_CELL = 0, NAME_CELL = 1, BIO_CELL = 2;
    var idInput = document.getElementById('id-form');
    var nameInput = document.getElementById('name-form');
    var bioInput = document.getElementById('bio-form');
    row.insertCell(ID_CELL).innerHTML = idInput.value;
    row.insertCell(NAME_CELL).innerHTML = nameInput.value;
    row.insertCell(BIO_CELL).innerHTML = bioInput.value;
    clearInputFields(idInput, nameInput, bioInput);
}
function clearInputFields(id, name, bio) {
    id.value = "";
    name.value = "";
    bio.value = "";
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
function deleteRow(event) {
    if (!event.target.classList.contains("delete-btn")) {
        return;
    }
    var button = event.target;
    button.closest('tr').remove();
}
function getUpdateButtonRow(event) {
    if (!event.target.classList.contains("update-btn")) {
        return;
    }
    var rowIndex = event.target.closest('tr').rowIndex;
    updateTableRow(rowIndex);
}
function updateTableRow(index) {
    var ID = 0, NAME = 1, BIO = 2;
    var idInput = document.getElementById('id-form');
    var nameInput = document.getElementById('name-form');
    var bioInput = document.getElementById('bio-form');
    var cell = table.rows[index].cells;
    var insertFormButton = document.getElementById('insert-btn');
    var divToAppendButton = document.getElementById('insert-or-update');
    var allDeleteButtons = document.getElementsByClassName("delete-btn");
    var allUpdateButtons = document.getElementsByClassName("update-btn");
    var newUpdateButton = document.createElement('button');
    populateButton(newUpdateButton, "update-btn", "Update", "update-form-class");
    idInput.value = cell[ID].innerHTML;
    nameInput.value = cell[NAME].innerHTML;
    bioInput.value = cell[BIO].innerHTML;
    insertFormButton.remove();
    setButtonsAvailability(allDeleteButtons, allUpdateButtons, true);
    divToAppendButton.appendChild(newUpdateButton);
    newUpdateButton.onclick = function () {
        if (checkIfIdExists(parseInt(idInput.value))) {
            cell[ID].innerHTML = idInput.value;
            cell[NAME].innerHTML = nameInput.value;
            cell[BIO].innerHTML = bioInput.value;
            clearInputFields(idInput, nameInput, bioInput);
            newUpdateButton.remove();
            divToAppendButton.appendChild(insertFormButton);
            setButtonsAvailability(allDeleteButtons, allUpdateButtons, false);
        }
    };
}
function populateButton(updateBtn, id, name, className) {
    updateBtn.setAttribute('id', id);
    updateBtn.setAttribute('class', className);
    updateBtn.innerHTML = name;
}
function setButtonsAvailability(btnGroupA, btnGroupB, key) {
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
