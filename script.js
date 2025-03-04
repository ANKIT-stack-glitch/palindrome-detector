let btn = document.querySelector('#check-btn');
let text = document.querySelector('#text-input');
let output = document.querySelector('#result');
 
btn.addEventListener('click', () => {
    let str = text.value;
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        output.innerHTML = `${str} is a palindrome`;
    } else {
        output.innerHTML = `${str} is not a palindrome`;
    }
});