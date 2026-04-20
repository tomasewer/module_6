const promoCode = prompt('Введите Промокод');
const promoCodeLower = promoCode.toLowerCase();
  if (promoCodeLower == 'скидка'){
    alert('Промокод применён');
  } else {
    alert('Промокод не работает');
  }
