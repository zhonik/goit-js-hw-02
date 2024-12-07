function getShippingCost(country) {
  let deliveryPrice;
  let message;
  switch (country) {
    case 'China':
      deliveryPrice = 100;
      message = `Shipping to ${country} will cost ${deliveryPrice} credits`;
      break;
    case 'Chile':
      deliveryPrice = 250;
      message = `Shipping to ${country} will cost ${deliveryPrice} credits`;
      break;
    case 'Australia':
      deliveryPrice = 170;
      message = `Shipping to ${country} will cost ${deliveryPrice} credits`;
      break;
    case 'Jamaica':
      deliveryPrice = 120;
      message = `Shipping to ${country} will cost ${deliveryPrice} credits`;
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
      break;
  }
  return message;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
