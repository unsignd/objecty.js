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

export function Render(option) {
  const ctx = option.context;
  const objs = option.objects;

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
