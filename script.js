const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';

const location = 'RSA';
const customers = 1;
let shipping = null;
let currency = null;

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (location === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries = 35 * 2;
const pens = 5 * 0;

const totalCost = shoes + toys + shirts + batteries + pens;
const costWithoutShipping = totalCost - shipping;

if (costWithoutShipping >= 1000 && customers === 1) {
  if (location === 'RSA' || location === 'NAM') {
    shipping = 0;
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} else if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}
