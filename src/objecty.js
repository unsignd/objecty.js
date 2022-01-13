export class Polygon {
  constructor(path, option) {
    this.path = path;
    this.color = (typeof option.color !== 'undefined') ? option.color : '#000';
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
    this.color = (typeof option.color !== 'undefined') ? option.color : '#000';
    this.strokeColor = (typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  checkType() {
    return 1;
  }
}

export function Render(context, objects) {
  const ctx = context;
  const objs = objects;

  objs.forEach(obj => {
    ctx.beginPath();
    ctx.fillStyle = obj.color;
    ctx.strokeStyle = obj.strokeColor;
    ctx.lineWidth = obj.lineWidth;

    switch (obj.checkType()) {
      case 0:
        let isFirst = false;

        obj.path.forEach(path => {
          if (isFirst === 0) {
            ctx.moveTo(path.x, path.y);
            isFirst = true;
          } else {
            ctx.lineTo(path.x, path.y);
          }
        });
        break;
      case 1:
        ctx.arc(obj.x, obj.y, obj.radius, obj.startAngle, obj.endAngle, obj.clockwise);
        break;
      default:
        break;
    }
    
    ctx.closePath();
    
    if (obj.fillVisible) {
      ctx.fill();
    }
    if (obj.strokeVisible) {
      ctx.stroke();
    }
  });
}
