"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criar uma função que retorne a quantidade de vogais da palavra passada.
function searchForVowelsInString(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i in vowels) {
        if (str.includes(vowels[i].toUpperCase()) || str.includes(vowels[i])) {
            console.log(vowels[i]);
        }
    }
}
searchForVowelsInString("ParalelepipedO");
//# sourceMappingURL=hello.js.map