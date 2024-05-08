import unittest
from recipeApp import app


class MyTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
    def test_generate_recipe_long_response(self):
        # Test with ingredients that should generate a long response
        ingredients = "chicken,rice,broccoli,carrots,onions,garlic"
        response = self.app.get(f"/article/generate-recipe/{ingredients}")
        self.assertEqual(response.status_code, 200)  # Check if the request was successful
        self.assertGreater(len(response.data), 100)  # Check if the response length is greater than 100


if __name__ == '__main__':
    unittest.main()
