# objecty.js

`objecty.js` is a javascript library for canvas drawing which objectify shapes.

## Setup
Download `dist/objecty.js` and include it in your html file.
```html
<script src="objecty.js"></script>
```

## Classes
* ## Polygon
  Declare Polygon class on your script.

  ```js
  new Polygon(path, option);
  ```

  <br>

  |Parameter|Type|Description|
  |:---:|:---:|:---|
  |path|array|The group which specify where to draw the points.|
  |option|object|The group which set optional properties.|

  <br>

  |Option|Type|Default|Description|
  |:---:|:---:|:---:|:---|
  |fillColor|string|'#000'|The color of the shape's inside.|
  |strokeColor|string|'#000'|The color of the shape's outside.|
  |lineWidth|number|1|The line width of the shape outline.|
  |fillVisible|bool|true|The visibility of the shape's inside.|
  |strokeVisible|bool|false|The visibility of the shape's outside.|

  <br>

  ### Example of using Polygon
  ```js
  const myPolygon = new Polygon([
    {x: 20, y: 10},
    {x: 5, y: 50},
    {x: 50, y: 80},
    {x: 50,y: 10}
  ], {
    fillColor: 'red',
    strokeColor: 'blue',
    strokeVisible: true
  });
  ```
* ## Rect
  Declare Rect class on your script.

  ```js
  new Rect(x, y, width, height, option);
  ```

  <br>
  
  |Parameter|Type|Description|
  |:---:|:---:|:---|
  |x|number|The x-axis coordinate of the rectangle's starting point.|
  |y|number|The y-axis coordinate of the rectangle's starting point.|
  |width|number|The rectangle's width. Positive values are to the right, and negative to the left.|
  |height|number|The rectangle's height. Positive values are down, and negative are up.|
  |option|object|The group which set optional properties.|

  <br>

  |Option|Type|Default|Description|
  |:---:|:---:|:---:|:---|
  |doClear|bool|false|If true, clears the area instead of fill.|
  |fillColor|string|'#000'|The color of the shape's inside.|
  |strokeColor|string|'#000'|The color of the shape's outside.|
  |lineWidth|number|1|The line width of the shape outline.|
  |fillVisible|bool|true|The visibility of the shape's inside.|
  |strokeVisible|bool|false|The visibility of the shape's outside.|

  <br>

  ### Example of using Rect
  ```js
  const myRect = new Rect(100, 150, 100, 80, {
    fillColor: 'gray'
  });
  ```
* ## Arc
  Declare Arc class on your script.

  ```js
  new Arc(x, y, radius, startAngle, endAngle, option);
  ```

  <br>

  |Parameter|Type|Description|
  |:---:|:---:|:---|
  |x|number|The horizontal coordinate of the arc's center.|
  |y|number|The vertical coordinate of the arc's center.|
  |radius|number|The arc's radius. Must be positive.|
  |startAngle|number|The angle at which the arc starts in radians, measured from the positive x-axis.|
  |endAngle|number|The angle at which the arc ends in radians, measured from the positive x-axis.|
  |option|object|The group which set optional properties.|

  <br>

  |Option|Type|Default|Description|
  |:---:|:---:|:---:|:---|
  |clockwise|bool|false|If true, draws the arc counter-clockwise between the start and end angles.|
  |fillColor|string|'#000'|The color of the shape's inside.|
  |strokeColor|string|'#000'|The color of the shape's outside.|
  |lineWidth|number|1|The line width of the shape outline.|
  |fillVisible|bool|true|The visibility of the shape's inside.|
  |strokeVisible|bool|false|The visibility of the shape's outside.|

  <br>

  ### Example of using Arc
  ```js
  const myArc = new Arc(10, 10, 25, 0, Math.PI * 2, {
    strokeColor: 'blue',
    lineWidth: 10,
    fillVisible: false,
    strokeVisible: true
  });
  ```
* ## Text
  Declare Text class on your script.

  ```js
  new Text(x, y, text, option);
  ```
  
  <br>

  |Parameter|Type|Description|
  |:---:|:---:|:---|
  |x|number|The x-axis coordinate of the point at which to begin drawing the text, in pixels.|
  |y|number|The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.|
  |text|string|A DOMString specifying the text string to render into the context.|
  |option|object|The group which set optional properties.|
  
  <br>

  |Option|Type|Default|Description|
  |:---:|:---:|:---:|:---|
  |maxWidth|number|(None)|The maximum number of pixels wide the text may be once rendered.|
  |font|string|'10px sans-serif'|A DOMString parsed as CSS font value.|
  |textAlign|string|'start'|The property specifies the current text alignment used when drawing text.|
  |textBaseline|string|'alphabetic'|The property of the Canvas 2D API specifies the current text baseline used when drawing text.|
  |direction|string|'inherit'|The property of the Canvas 2D API specifies the current text direction used to draw text.|
  |fillColor|string|'#000'|The color of the shape's inside.|
  |strokeColor|string|'#000'|The color of the shape's outside.|
  |lineWidth|number|1|The line width of the shape outline.|
  |fillVisible|bool|true|The visibility of the shape's inside.|
  |strokeVisible|bool|false|The visibility of the shape's outside.|
  
  <br>

  ### Example of using Text
  ```js
  const myText = new Text(200, 50, 'Hello writing docs is crazy tire.', {
    fillColor: 'red',
    font: '48px serif'
  });
  ```
* ## Image
  Declare Image class on your script.

  ```js
  new Image(dx, dy, image, option);
  ```
  
  <br>

  |Parameter|Type|Description|
  |:---:|:---:|:---|
  |dx|number|The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.|
  |dy|number|The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.|
  |image|element|An element to draw into the context.|
  |option|object|The group which set optional properties.|
  
  <br>

  |Option|Type|Default|Description|
  |:---:|:---:|:---:|:---|
  |sx|number|(None)|The x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.|
  |sy|number|(None)|The y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.|
  |dWidth|number|(None)|The width to draw the image in the destination canvas.|
  |dHeight|number|(None)|The height to draw the image in the destination canvas.|
  |sWidth|number|(None)|The width of the sub-rectangle of the source image to draw into the destination context.|
  |sHeight|number|(None)|The height of the sub-rectangle of the source image to draw into the destination context.|
  
  <br>

  ### Example of using Image
  ```js
  const myImage = new Image(0, 0, myImage, {
    dWidth: 100,
    dHeight: 100
  });
  ```

## Render
There are two ways to render these objects in `objecty.js`.

* ## Using Renderer

  The function `render(context)` automatically renders each object.

  ```js
  const myRenderer = new Renderer(...objects);

  myRenderer.render(context);
  ```
  <br>

  ### Example of using Renderer
  ```js
  ...

  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  // The first parameter has the lowest layer, and the last parameter has the highest.
  const myRenderer = new Renderer(myArc, myText, myRect);

  myRenderer.render(ctx);
  ```

* ## Using `render(context)`

  Every object in `objecty.js` has `render(context)` function.<br>
  It renders only itself.
  <br>

  ### Example of using `render(context)`
  ```js
  ...

  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  const myPolygon = new Polygon([
    {x: 20, y: 10},
    {x: 5, y: 50},
    {x: 50, y: 80},
    {x: 50,y: 10}
  ], {
    fillColor: 'red',
    strokeColor: 'blue',
    strokeVisible: true
  });

  myPolygon.render(ctx);
  ```

## Edit Parameters
You can modify the parameters of all objects in `objecty.js`.

<br>

```js
...

const myPolygon = new Polygon([
  {x: 20, y: 10},
  {x: 5, y: 50},
  {x: 50, y: 80},
  {x: 50,y: 10}
], {
  fillColor: 'red',
  strokeColor: 'blue',
  strokeVisible: true
});

myPolygon.render(ctx);

setTimeout(() => {
  myPolygon.path = [
    {x: 20, y: 10},
    {x: 5, y: 50},
    {x: 50, y: 80}
  ];
  myPolygon.fillColor = 'blue';
  myPolygon.strokeVisible = false;

  myPolygon.render(ctx);
}, 1000);
```