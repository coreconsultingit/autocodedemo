import { login, verifyDashboard } from './utils';

test('user can log in', () => {
  login('testuser', 'password123');
  verifyDashboard();
});