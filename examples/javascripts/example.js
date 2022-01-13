import { Polygon, Render } from "../../src/objecty.js";

const canvas = document.querySelector('#canvas');

const square = new Polygon([
  {x: 10, y: 10},
  {x: 50, y: 10},
  {x: 50, y: 50},
  {x: 10, y: 50}
], true);

Render(canvas, [
  square
])