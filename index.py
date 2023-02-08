from flask import Flask, request
from markupsafe import escape
from flask import url_for
from flask import render_template

app = Flask(__name__)

@app.route('/')
def get():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=8080, debug=True, threaded=True)