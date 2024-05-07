from flask import Flask
from flask_restx import Api, Resource
from flask_cors import CORS
import os
from openai import OpenAI

# Initializing the Flask application
app = Flask(__name__)
api = Api(app, version='1.0', title="Article Generator API")
CORS(app)

ns = api.namespace('article', description="Article Generator Operations")

# Initialize the OpenAI and Supabase clients
openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))


@ns.route('/generate-recipe/<ingredients>')
class ArticleGenerator(Resource):
    def get(self, ingredients):

        ingredients_list = ingredients.split(',')
        formatted_ingredients = ", ".join(ingredients_list[:-1]) + ", and " + ingredients_list[-1]
        prompt_text = f"Give me some food dishes recipes that I can make using {formatted_ingredients}."

            # Generate article using OpenAI's Chat API
        completion = openai_client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a college chef. Output structured recipes for students."},
                {"role": "user", "content": prompt_text}
            ]
        )

        article_text = completion.choices[0].message.content
        
        return article_text

if __name__ == '__main__':
    app.run(debug=True, port=5000)
