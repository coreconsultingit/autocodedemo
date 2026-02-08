import unittest
from app import App

class EndToEndTest(unittest.TestCase):
    def test_app_workflow(self):
        app = App()
        self.assertTrue(app.run())