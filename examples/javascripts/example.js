import { Arc, Polygon, Rect, Renderer } from "../../src/objecty.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const square = new Polygon([
  {x: 10, y: 10},
  {x: 50, y: 10},
  {x: 50, y: 50},
  {x: 10, y: 80}
], {
  fillColor: '#faf'
});

const circle = new Arc(10, 10, 30, 0, Math.PI * 2, {
  strokeColor: 'red',
  lineWidth: 10,
  fillVisible: false,
  strokeVisible: true
});

const rect = new Rect(100, 150, 50, 80, {
  fillColor: '#123456'
});

const clearRect = new Rect(20, 20, 50, 50, {
  doClear: true
});

const myRenderer = new Renderer(square, circle, rect, clearRect);

myRenderer.render(ctx);

setInterval(() => {
  circle.radius += 1;
  circle.x += 1;

  myRenderer.render(ctx);
}, 1);
