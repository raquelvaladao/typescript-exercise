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
console.log(searchForVowelsInString("ParalelepipedO"));
//Give an example of usage with a word received via input in the form.
//TODO
//# sourceMappingURL=exercicio1.js.map