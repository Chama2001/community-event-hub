from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

@app.route('/api/create-event', methods=['POST'])
def create_event():
    try:
        data = request.json
        event_name = data.get('event_name')
        
        if not event_name:
            return jsonify({"error": "Event name is required"}), 400

        # Simulated Event Creation & QR Link Generation
        event_id = str(uuid.uuid4())[:8]
        registration_link = f"https://community-hub.local/register/{event_id}"
        
        response = {
            "success": True, 
            "message": "Event Created Successfully!",
            "registration_link": registration_link,
            "qr_data": f"QR_CODE_DATA_{event_id}"
        }
        return jsonify(response)

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
