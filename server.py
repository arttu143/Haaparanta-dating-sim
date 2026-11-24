import json
from pathlib import Path

from flask import Flask, redirect, send_from_directory

HOST = "127.0.0.1"
PORT = 5500
PROJECT_ROOT = Path(__file__).resolve().parent
GAME_ROOT = PROJECT_ROOT / "PeliProto"

app = Flask(__name__)


@app.get("/")
def root():
    return redirect("/PeliProto/")


@app.get("/PeliProto/")
def game_index():
    return send_from_directory(GAME_ROOT, "index.html")


@app.get("/PeliProto/<path:filename>")
def game_files(filename):
    return send_from_directory(GAME_ROOT, filename)


@app.get("/api/game")
def game_config():
    config = {
        "title": "PeliProto",
        "entry": "/PeliProto/",
        "files": [
            "peliScript.js",
            "peliStyle.css",
            "img/map.png",
        ],
    }
    return app.response_class(
        response=json.dumps(config),
        status=200,
        mimetype="application/json",
    )


def main():
    print(f"Serving PeliProto at http://{HOST}:{PORT}/PeliProto/")
    app.run(host=HOST, port=PORT, debug=False)


if __name__ == "__main__":
    main()