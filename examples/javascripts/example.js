import { Arc, Polygon, Renderer } from "../../src/objecty.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const square = new Polygon([
  {x: 10, y: 10},
  {x: 50, y: 10},
  {x: 50, y: 50},
  {x: 10, y: 50}
], {
  color: '#faf',
  fillVisible: true
});

const circle = new Arc(10, 10, 10, 0, Math.PI * 2, {
  strokeColor: 'red',
  lineWidth: 2,
  fillVisible: false,
  strokeVisible: true
});

const myRenderer = new Renderer(square, circle);

myRenderer.render(ctx);