from flask import Flask

app = Flask(__name__)
@app.route('/')

def hello_world():
    return 'Hello World'

if __name__ == '__main__':
    app.run()

def untagsby():
    return 'Untag Surabaya'
    
app.add_url_rule('/', 'untag', untagsby)