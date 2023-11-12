# backend.py

from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)

secret_santa_groups = {}
secret_santa_groups["Elves"] = ["hello"]

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS, HEAD, GET, POST, PUT, DELETE'
    return response

@app.route('/members/<group_name>')
def members(group_name):
    # Assuming secret_santa_groups is a dictionary
    if group_name in secret_santa_groups:
        members = secret_santa_groups[group_name]
        response_data = {'group_name': group_name, 'members': members}
        return add_cors_headers(jsonify(response_data)), 200
    return add_cors_headers(jsonify({'error': 'Group not found'})), 404

# ... (the rest of your code)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

"""
@app.route('/create_group', methods=['POST'])
def create_group():
    data = request.get_json()
    group_name = data.get('group_name')
    members = data.get('members')

    if group_name and members:
        secret_santa_groups[group_name] = members
        return jsonify({'message': f'Secret Santa group {group_name} created successfully!'})

    return jsonify({'error': 'Invalid data'}), 400
"""








