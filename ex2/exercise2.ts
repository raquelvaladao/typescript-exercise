export{};
//given the array:
type Object = {
    id: number, 
    name: string, 
    bio: string
};

const list: Array<Object> = Array(
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);

//create a function that returns the bio given an id
function searchForBioGivenId(givenId: number, people: Array<Object>): string {
    return people.filter(person => person.id === givenId)[0].bio     
}

//create a function that returns the name given an id
function searchForNameGivenId(givenId: number, people: Array<Object>): string {
    return people.filter(person => person.id === givenId)[0].name
}

//create a function that deletes item given an id
function deleteItemGivenId(givenId: number, people: Array<Object>): void {
    let personToDelete: Object = people.filter(person => person.id === givenId)[0]
    const index: number = people.indexOf(personToDelete)
    people.splice(index, 1)    
}

console.log(searchForBioGivenId(2, list))
console.log(searchForNameGivenId(2, list))
deleteItemGivenId(2, list)
list.forEach(person => console.log(person))

//Demonstrate all functions with the functional paradigm and the imperative
