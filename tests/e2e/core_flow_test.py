import unittest
from app.main import login, search, checkout

class CoreFlowTest(unittest.TestCase):
    def test_login_search_checkout(self):
        self.assertTrue(login('testuser', 'password123'))
        self.assertTrue(search('product123'))
        self.assertTrue(checkout('product123', 'testuser'))