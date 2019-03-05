import "./index.css";
import io from "socket.io-client";
import MarkdownPlusRenderer from "./modules/markdown_plus/MarkdownPlusRenderer";

const socket = io("http://localhost:8050/consume");

//Socket Listener
socket.on("markdown_received", data => {
  new MarkdownPlusRenderer("root", data);
});

/**
 * To test update API of MarkdownPlusRenderer, uncomment the following listner and comment the above socket listner
 */
/*
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let obj;
socket.on("markdown_received", data => {
  obj = new MarkdownPlusRenderer("root1", data);
  sleep(10000).then(() => {
    let p =
      '#Anjan Kaur  \n<Chart>\n\t{ "id":"hisogram_1", "type":"radar",\n"data":{\n"labels": [\n"Boston",\n"Worcester",\n"Springfield",\n"Lowell",\n"Cambridge",\n"New Bedford"\n],\n"datasets": [\n{\n"label": "Population",\n"data": [\n617594,\n181045,\n153060,\n106519,\n105162,\n95072\n],\n"backgroundColor": [\n"rgba(255, 99, 132, 0.6)",\n"rgba(54, 162, 235, 0.6)",\n"rgba(255, 206, 86, 0.6)",\n"rgba(75, 192, 192, 0.6)",\n"rgba(153, 102, 255, 0.6)",\n"rgba(255, 159, 64, 0.6)",\n"rgba(255, 99, 132, 0.6)"\n]\n}\n]\n},\n"options":{\n"title": {\n"display": "kk",\n"text": "Largest Cities In",\n"fontSize": 25\n},\n"legend": {\n"display": "vvv"\n}\n}\n}\n</Chart>';
    obj.update(p);
  });
});


*/
