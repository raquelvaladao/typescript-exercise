//Create a function that returns the number of vowels given a word
function returnQuantityOfVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return word.toLowerCase()
        .split('')
        .filter(function (letter) { return vowels.includes(letter); })
        .length;
}
//Give an example of usage with a word received via the function parameter. 
console.log(returnQuantityOfVowels("ParalelepipedO Sff"));
//Give an example of usage with a word received via input in the form.
var form = document.querySelector('.form-id');
var word = document.getElementById('word');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(returnQuantityOfVowels(word.value));
});
