import { Polygon, Render } from "../../src/objecty.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const square = new Polygon([
  {x: 10, y: 10},
  {x: 50, y: 10},
  {x: 50, y: 50},
  {x: 10, y: 20}
], {
  color: '#faf',
  strokeColor: 'red',
  lineWidth: 2,
  fillVisible: true
});

Render({
  context: ctx,
  objects: [
    square
  ]
});