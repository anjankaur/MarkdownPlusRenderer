#!/bin/bash

cd markdown_renderer
if [ ! -d "./node_modules" ]; then
  npm install
fi

cd ../markdown-generator
if [ ! -d "./node_modules" ]; then
  npm install
fi

cd ../server
export FLASK_APP=server
export FLASK_DEBUG=false
flask run -h localhost -p 8050
# 8050 is the web socket port, better to move it in config file
