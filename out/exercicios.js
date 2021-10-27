"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create a function that returns the number of vowels given a word
function searchForVowelsInString(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let presentVowels = [];
    for (let i in vowels) {
        if (str.includes(vowels[i].toUpperCase()) || str.includes(vowels[i])) {
            presentVowels.push(vowels[i]);
        }
    }
    return presentVowels;
}
//Give an example of usage with a word received via the function parameter.
let arr = searchForVowelsInString("ParalelepipedO");
console.log(arr);
var list = Array({ "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" }, { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" }, { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." }, { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." });
//create a function that returns the bio given an id
function searchForBioGivenId(givenId, people) {
    return people.filter(person => person.id === givenId)[0].bio;
}
//Crie uma função que retorne o name do id passado
function searchForNameGivenId(givenId, people) {
    return people.filter(person => person.id === givenId)[0].name;
}
//Crie uma função que apague um item da lista a partir de um id passado
function deleteItemGivenId(givenId, people) {
    let personToDelete = people.filter(person => person.id === givenId)[0];
    const index = people.indexOf(personToDelete);
    people.splice(index, 1);
}
console.log(searchForBioGivenId(2, list));
console.log(searchForNameGivenId(2, list));
deleteItemGivenId(2, list);
list.forEach(person => console.log(person));
//# sourceMappingURL=exercicios.js.map