from flask import Flask
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

#Members API Route

@app.route("/members")
def members():
    return {"members": ["Members1", "Members2", "Members3"]}

if __name__ == "__main__":
    app.run(debug=True)