
//given the array:
type People = {
    id: number,
    name: string,
    bio: string
};

const list: Array<People> = Array(
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);

//create a function that returns the bio given an id

function searchForBioGivenId(givenId: number, people: Array<People>): string {
    return people.filter(person => person.id === givenId)[0].bio  ;   
}

//create a function that returns the name given an id
function searchForNameGivenId(givenId: number, people: Array<People>): string {
    return people.filter(person => person.id === givenId)[0].name;
}

//create a function that deletes item given an id
function deleteItemGivenId(givenId: number, people: Array<People>): void {
    let personToDelete: People = people.filter(person => person.id === givenId)[0];
    const index: number = people.indexOf(personToDelete);
    people.splice(index, 1);
}

console.log(searchForBioGivenId(2, list));
console.log(searchForNameGivenId(2, list));
deleteItemGivenId(2, list);
list.forEach(person => console.log(person));


//Demonstrate all functions with the functional paradigm and the imperative
const searchForBioGivenIdFunc = (givenId: number, people: Array<People>): string => {
    const filter: string = people.filter(person => person.id === givenId)[0].bio;
    return filter;
}

const searchForNameGivenIdFunc = (givenId: number, people: Array<People>): string => {
    const filter: string = people.filter(person => person.id === givenId)[0].name;
    return filter;
}

const deleteItemGivenIdFunc = (givenId: number, people: Array<People>): Array<People> => {
    const index: number = people.indexOf(people.filter(person => person.id === givenId)[0]);
    return people.filter(person => person !== people[index]);
}

console.log(searchForNameGivenIdFunc(3, list));
console.log(searchForBioGivenIdFunc(3, list));
console.log(`A seguir, deve-se deletar 1 da lista anterior:`);
console.log(deleteItemGivenIdFunc(1, list));
console.log(`Deve continuar com 1 na lista (imutável):`);
console.log(list);


//Demonstrate all functions with the imperative paradigm
function searchForBioGivenIdImp(givenId: number, people: Array<People>): string {
    let bio: string = "";

    for (let i = 0; i < people.length; i ++){
        if(people[i].id === givenId){
           bio = people[i].bio;
        }
    }
    return bio;
}

function searchForNameGivenIdImp(givenId: number, people: Array<People>): string {
    let name: string = "";

    for (let i = 0; i < people.length; i ++){
        if(people[i].id === givenId){
           name = people[i].name;
        }
    }
    return name;
}

function deleteItemGivenIdImp(givenId: number, people: Array<People>): Array<People> {
    for (let i = 0; i < people.length; i ++){
        if(people[i].id === givenId){
            people.splice(givenId, 1);
        }
    }
    return people;
}

console.log(`Imperativo:`);
console.log(searchForNameGivenIdImp(3,list));
console.log(searchForBioGivenIdImp(3,list));
console.log(deleteItemGivenIdImp(3, list));