export {};


// Criar uma função que retorne a quantidade de vogais da palavra passada.
function searchForVowelsInString(str: string) {
    const vowels: string[] = ['a','e','i','o','u']
    let presentVowels: string[]

    for (let i in vowels) {
        if(str.includes(vowels[i].toUpperCase()) || str.includes(vowels[i])) {
            presentVowels.push(vowels[i])
        }
    }
    return presentVowels   
}
//Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
console.log(searchForVowelsInString("ParalelepipedO"))

//Dar um exemplo de uso com uma palavra recebida via input no formulário.


//Dado o array:
type Object = {
    id: number, 
    name: string, 
    bio: string
};

var list: Array<Object> = Array(
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);

//crie uma função que retorne a bio do id passado
function searchForBioGivenId(givenId: number, people: Array<Object>){
    for(let i in people) {
        if(people[i].id == givenId) {
            return people[i].bio
        }
    }
}

//Crie uma função que retorne o name do id passado
function searchForNameGivenId(givenId: number, people: Array<Object>){
    for(let i in people) {
        if(people[i].id == givenId) {
            return people[i].name
        }
    }
}

//Crie uma função que apague um item da lista a partir de um id passado
function deleteItemGivenId(givenId: number, people: Array<Object>){
    for(let i in people) {
        if(people[i].id == givenId) {
            const index = people.indexOf(people[i])
            people.splice(index, 1)
        }
    }
}

