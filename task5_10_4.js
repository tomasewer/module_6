const userName = prompt('Введите Имя');
let userOld = prompt('Введите год рождения');
  
if (userOld = +userOld){
  userOld = 2026 - userOld;
  
    switch(userOld % 10){
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        userOldGod = 'лет';
      break;
      case 1:
        userOldGod = 'год';
      break;
      case 2:
      case 3:
      case 4:
        userOldGod = 'года';
      break;
    }
  alert(`${userName}: ${userOld} ${userOldGod}`);
} else {
  alert(`Год должен быть числом!`);
}