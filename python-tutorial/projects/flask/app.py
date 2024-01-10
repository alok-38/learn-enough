from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        user_input = request.form['user_input']
        return render_template('hello.html', user_input=user_input)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
