//Напишите проверку, которая позволит определить, является слово палиндромом или нет.
//Если является, то выведите в консоль фразу «Слово <слово> является палиндромом». Если нет — «Слово <слово> не является палиндромом».
//Довод
//Сантимент


const inputWord = prompt();
const palindrome = inputWord;
const palindromeLower = palindrome.toLowerCase('');
const i = palindromeLower.length;
for(let j = 0; j < i / 2; j++){
  const startPalindrome = palindromeLower[j];
  const finishPalindrome = palindromeLower[i - j - 1];
    if(startPalindrome !== finishPalindrome){
      console.log(`Слово ${palindrome} не является палиндромом`);
      break; } else {
      console.log(`Слово ${palindrome} является палиндромом`);
      }
}
