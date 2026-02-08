import { addToCart, proceedToCheckout, verifyOrder } from './utils';

test('user can complete checkout', () => {
  addToCart('Product A');
  proceedToCheckout();
  verifyOrder();
});