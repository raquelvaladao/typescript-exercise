
//Create a function that returns the number of vowels given a word
function returnQuantityOfVowels(word: string): number {
    const vowels: string[] = ['a','e','i','o','u'];
    
    return word.toLowerCase()
                .split('')
                .filter(letter => vowels.includes(letter))
                .length;
}
//Give an example of usage with a word received via the function parameter. 
console.log(returnQuantityOfVowels("ParalelepipedO Sff"));

//Give an example of usage with a word received via input in the form.
const form: HTMLFormElement = document.querySelector('.form-id');
const word: HTMLInputElement = document.getElementById('word') as HTMLInputElement;
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(returnQuantityOfVowels(word.value));
});

