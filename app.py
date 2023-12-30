from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_random_even_number')
def generate_random_even_number():
    even_number = random.randint(1, 100) * 2
    return jsonify({'evenNumber': even_number})

@app.route('/generate_random_color')
def generate_random_color():
    color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
    return jsonify({'color': color})

if __name__ == '__main__':
    app.run(debug=True)
