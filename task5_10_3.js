const userName = prompt('Введите Имя');
let userOld = prompt('Введите год рождения');
  
if (userOld = +userOld){
  userOld = 2026 - userOld;
  alert(`${userName}: ${userOld}`);
} else {
  alert(`Год должен быть числом!`);
}