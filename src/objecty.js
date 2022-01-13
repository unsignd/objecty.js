export class Polygon {
  constructor(path, isFilled) {
    this.path = path;
    this.isFilled = isFilled;
  }

  checkType() {
    return 0;
  }
}

export function Render(canvas, objs) {
  objs.forEach(obj => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();

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
    
    if (!obj.isFilled) {
      ctx.stroke();
    } else {
      ctx.fill();
    }
  });
}
