# MarkdownPlusRenderer
React app to render markdown

This project consists of two types of clients( 1 Generator and N consumers) and a websocket server written in flask. Generator and Client are both react app. The websocket server receives markdown plus text from a generator and the content is
streamed to the Consumers, the consumer app will render the markdown from the file uploaded by the generator.

Through this project markdown content can be rendered into a div element and also receive's updates to this content and render accordingly. It makes use of markdown-to-jsx(https://github.com/probablyup/markdown-to-jsx) project for parsing and converting to html. It can also render charts. Charts are made using [chartjs](https://www.chartjs.org/)  
Charts are identified by an id. If the markdown text is updated with the chart with same id, then it updates the current chart in place rather than appending it at end to the current markdown text. Rest of the updated text is appended to the existing text.
Some test files are present in [testfiles](test_files) folder and they contain chart examples. 
Generator just accepts ".txt" or ".md" file.

## Installing the app

```
# install the dependencies and start the flask web socket server
./setup.sh

# start the generator
cd markdown-generator
npm start

# start a client
cd markdown_renderer
npm start
```
To use: Open the browser for both generator and consumer urls. And upload a markdown file from generator. 

### TODO next
Error handling
