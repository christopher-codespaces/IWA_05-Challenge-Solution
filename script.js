const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let userLocation = 'RSA';
let currency = null;
let shipping = null;
let customers = '1';

if (userLocation === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (userLocation === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if ((shoes + batteries + pens + shirts > 1000) && (customers === '1')) {
  if (userLocation === 'NAM') {
    shipping = 0;
  } else if (userLocation === 'RSA') {
    shipping = 0 || shipping;
  }
}

if ((shipping === 0) && (customers !== '1')) {
  console.log(FREE_WARNING);
}

userLocation === 'NK' ? console.log(BANNED_WARNING) : console.log('Price:', currency, shoes + batteries + pens + shirts + shipping);
