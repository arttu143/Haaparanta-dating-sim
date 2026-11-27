# JSON serialization is used to return the game configuration in a browser-readable format.
import json
# pathlib provides cross-platform paths for locating files relative to this script.
from pathlib import Path

# Flask creates the web application, redirect sends visitors to another URL,
# and send_from_directory safely serves files from a chosen folder.
from flask import Flask, redirect, send_from_directory

# The server listens only on the local computer.
HOST = "127.0.0.1"
# This is the local port where the website will be available.
PORT = 5500
# Resolve the absolute directory containing this Python file.
PROJECT_ROOT = Path(__file__).resolve().parent
# Locate the PeliProto game folder inside the project directory.
GAME_ROOT = PROJECT_ROOT / "PeliProto"

# Create the Flask application object and name it after this module.
app = Flask(__name__)


# Register the website's root URL as a route.
@app.get("/")
def root():
    # Send users visiting "/" to the actual game page.
    return redirect("/PeliProto/")


# Register the URL that serves the game's main HTML file.
@app.get("/PeliProto/")
def game_index():
    # Send index.html from the PeliProto directory.
    return send_from_directory(GAME_ROOT, "index.html")


# Register a catch-all route for files inside PeliProto.
@app.get("/PeliProto/<path:filename>")
def game_files(filename):
    # Serve the requested JavaScript, CSS, image, or other static file.
    return send_from_directory(GAME_ROOT, filename)


# Register an API endpoint that describes the game configuration.
@app.get("/api/game")
def game_config():
    # Store title, entry page, and key assets in a Python dictionary.
    config = {
        "title": "PeliProto",
        "entry": "/PeliProto/",
        "files": [
            "peliScript.js",
            "peliStyle.css",
            "img/map.png",
        ],
    }
    # Convert the dictionary to JSON and explicitly mark it as an API response.
    return app.response_class(
        response=json.dumps(config),
        status=200,
        mimetype="application/json",
    )


# Start the Flask server when this file is run directly.
def main():
    # Print the address of the game before starting the server.
    print(f"Serving PeliProto at http://{HOST}:{PORT}/PeliProto/")
    # Bind to the configured host and port without Flask's development debugger.
    app.run(host=HOST, port=PORT, debug=False)


# Run main() only when this script is executed, not when it is imported.
if __name__ == "__main__":
    main()