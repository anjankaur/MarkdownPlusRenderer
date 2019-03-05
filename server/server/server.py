from flask import Flask, send_from_directory
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'development key'
socket = SocketIO(app)
CORS(app)

generator = []
consumers = []


def on_receiving_markdown(text):
    emit('markdown_received', text, namespace='/consume', broadcast=True)


@app.route('/')
def serve_static_index():
    print('connected')


# TODO refuse connection for second generator?
@socket.on('connect', namespace='/generate')
def on_connect_generate():
    print('Generator connected')


@socket.on('send_markdown', namespace='/generate')
def on_markdown_sent(data):
    print(data)
    on_receiving_markdown(data)


@socket.on('connect', namespace='/consume')
def on_connect_consume():
    print('Consumer connected')
    # consumers.append TODO
