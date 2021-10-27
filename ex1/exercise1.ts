export {};


//Create a function that returns the number of vowels given a word
function searchForQuantityOfVowels(word: string) {
    const vowels: string[] = ['a','e','i','o','u']
    
    return word.toLowerCase()
                .split('')
                .filter(letter => vowels.includes(letter))
                .length
}
//Give an example of usage with a word received via the function parameter. 
console.log(searchForQuantityOfVowels("ParalelepipedO Sff"))

//Give an example of usage with a word received via input in the form.
//TODO

