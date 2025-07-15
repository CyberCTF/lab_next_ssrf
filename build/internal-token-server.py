from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/token', methods=['GET'])
def get_token():
    return jsonify({
        "access_token": "db-backup-ACCESS-2024-SECRET-XYZ123"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000) 