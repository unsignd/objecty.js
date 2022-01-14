export class Polygon {
  constructor(path, option) {
    this.path = path;
    this.color = (typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  checkType() {
    return 0;
  }
}

export class Arc {
  constructor(x, y, radius, startAngle, endAngle, option) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.clockwise = (typeof option.clockwise !== 'undefined') ? option.clockwise : false;
    this.color = (typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  checkType() {
    return 1;
  }
}

export class Rect {
  constructor(x, y, width, height, option) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.doClear = (typeof option.doClear !== 'undefined') ? option.doClear : false;
    this.color = (typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  checkType() {
    if (this.doClear)
      return 3;
    else
      return 2;
  }
}

export class Renderer {
  constructor(...objects) {
    this.objs = objects;
  }

  render(context) {
    this.ctx = context;
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.objs.forEach(obj => {
      this.ctx.beginPath();
      this.ctx.fillStyle = obj.color;
      this.ctx.strokeStyle = obj.strokeColor;
      this.ctx.lineWidth = obj.lineWidth;
  
      switch (obj.checkType()) {
        case 0:
          let isFirst = false;
  
          obj.path.forEach(path => {
            if (isFirst === 0) {
              this.ctx.moveTo(path.x, path.y);
              isFirst = true;
            } else {
              this.ctx.lineTo(path.x, path.y);
            }
          });

          if (obj.fillVisible)
            this.ctx.fill();
          if (obj.strokeVisible)
            this.ctx.stroke();
          break;
        case 1:
          this.ctx.arc(obj.x, obj.y, obj.radius, obj.startAngle, obj.endAngle, obj.clockwise);

          if (obj.fillVisible)
            this.ctx.fill();
          if (obj.strokeVisible)
            this.ctx.stroke();
          break;
        case 2:
          if (obj.fillVisible)
            this.ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
          if (obj.strokeVisible)
            this.ctx.strokeRect(obj.x, obj.y, obj.width, obj.height);
          break;
        case 3:
          this.ctx.clearRect(obj.x, obj.y, obj.width, obj.height);
          break;
        default:
          break;
      }
      
      this.ctx.closePath();
    });
  }
}