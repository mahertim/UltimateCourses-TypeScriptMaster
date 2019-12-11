interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
}

interface PayPal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string };

const order: Order = {
  id: 'xj28s',
  amount: 100,
  currency: 'USD',
};
console.log(order);

const orderCard: CheckoutCard = {
  ...order,
  card: '1000 2000 3000 4000',
  cvc: '123',
};
console.log(orderCard);

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: 'abc@def.com',
};
console.log(orderPayPal);

const stripeCard: Stripe = {
  card: '1111 2222 3333 4444',
  cvc: '456',
};
const assigned: CheckoutCard = Object.assign({}, order, stripeCard);
console.log(assigned);
