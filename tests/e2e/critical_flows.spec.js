import { login, navigateToHomePage, verifyPageElements } from './utils';

describe('Critical User Flows', () => {
  it('should login and verify homepage', () => {
    login();
    navigateToHomePage();
    verifyPageElements();
  });
})