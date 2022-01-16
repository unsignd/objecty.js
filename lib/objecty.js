class Objecty {
  render() {
    throw new Error("The method 'render(ctx)' is not implemented.");
  }

  setCtx(ctx) {
    ctx.beginPath();
    ctx.fillStyle = obj.color;
    ctx.strokeStyle = obj.strokeColor;
    ctx.lineWidth = obj.lineWidth;

    return ctx;
  }
}

export class Polygon extends Objecty {
  constructor(path, option) {
    super();
    const isOptionEnable = typeof option !== 'undefined';

    this.path = path;
    this.color = (isOptionEnable && typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (isOptionEnable && typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (isOptionEnable && typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (isOptionEnable && typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (isOptionEnable && typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  render(context) {
    const ctx = super.setCtx(context);

    let isFirst = false;
  
    this.path.forEach(path => {
      if (isFirst === 0) {
        ctx.moveTo(path.x, path.y);
        isFirst = true;
      } else {
        ctx.lineTo(path.x, path.y);
      }
    });

    if (this.fillVisible === true)
      ctx.fill();
    if (this.strokeVisible === true)
      ctx.stroke();

    ctx.closePath();
  }
}

export class Arc extends Objecty {
  constructor(x, y, radius, startAngle, endAngle, option) {
    super();
    const isOptionEnable = typeof option !== 'undefined';

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.clockwise = (isOptionEnable && typeof option.clockwise !== 'undefined') ? option.clockwise : false;
    this.color = (isOptionEnable && typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (isOptionEnable && typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (isOptionEnable && typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (isOptionEnable && typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (isOptionEnable && typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  render(context) {
    const ctx = super.setCtx(context);

    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.clockwise);

    if (this.fillVisible === true)
      ctx.fill();
    if (this.strokeVisible === true)
      ctx.stroke();
      
    ctx.closePath();
  }
}

export class Rect extends Objecty {
  constructor(x, y, width, height, option) {
    super();
    const isOptionEnable = typeof option !== 'undefined';

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.doClear = (isOptionEnable && typeof option.doClear !== 'undefined') ? option.doClear : false;
    this.color = (isOptionEnable && typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (isOptionEnable && typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (isOptionEnable && typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (isOptionEnable && typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (isOptionEnable && typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  render(context) {
    const ctx = super.setCtx(context);
    
    if (this.doClear === true)
      ctx.clearRect(this.x, this.y, this.width, this.height);
    else
      if (this.fillVisible === true)
        ctx.fillRect(this.x, this.y, this.width, this.height);
      if (this.strokeVisible === true)
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
    ctx.closePath();
  }
}

export class Text extends Objecty {
  constructor(x, y, text, option) {
    super();
    const isOptionEnable = typeof option !== 'undefined';

    this.x = x;
    this.y = y;
    this.text = text;
    this.maxWidth = (isOptionEnable && typeof option.maxWidth !== 'undefined') ? option.maxWidth : -1;
    this.font = (isOptionEnable && typeof option.font !== 'undefined') ? option.font : '10px sans-serif';
    this.textAlign = (isOptionEnable && typeof option.textAlign !== 'undefined') ? option.textAlign : 'start';
    this.textBaseline = (isOptionEnable && typeof option.textBaseline !== 'undefined') ? option.textBaseline : 'alphabetic';
    this.direction = (isOptionEnable && typeof option.direction !== 'undefined') ? option.direction : 'inherit';
    this.color = (isOptionEnable && typeof option.fillColor !== 'undefined') ? option.fillColor : '#000';
    this.strokeColor = (isOptionEnable && typeof option.strokeColor !== 'undefined') ? option.strokeColor : '#000';
    this.lineWidth = (isOptionEnable && typeof option.lineWidth !== 'undefined') ? option.lineWidth : 1;
    this.fillVisible = (isOptionEnable && typeof option.fillVisible !== 'undefined') ? option.fillVisible : true;
    this.strokeVisible = (isOptionEnable && typeof option.strokeVisible !== 'undefined') ? option.strokeVisible : false;
  }

  render(context) {
    const ctx = super.setCtx(context);

    ctx.font = this.font;
    ctx.textAlign = this.textAlign;
    ctx.textBaseline = this.textBaseline;
    ctx.direction = this.direction;

    if (this.fillVisible === true)
      if (this.maxWidth === -1)
        ctx.fillText(this.text, this.x, this.y);
      else
        ctx.fillText(this.text, this.x, this.y, this.maxWidth);
    if (this.strokeVisible === true)
      if (this.maxWidth === -1)
        ctx.strokeText(this.text, this.x, this.y);
      else
        ctx.strokeText(this.text, this.x, this.y, this.maxWidth);
        
    ctx.closePath();
  }
}

export class Image extends Objecty {
  constructor(dx, dy, image, option) {
    super();
    const isOptionEnable = typeof option !== 'undefined';

    this.dx = dx;
    this.dy = dy;
    this.image = image;
    this.sx = (isOptionEnable && typeof option.sx !== 'undefined') ? option.sx : true;
    this.sy = (isOptionEnable && typeof option.sy !== 'undefined') ? option.sy : true;
    this.sWidth = (isOptionEnable && typeof option.sWidth !== 'undefined') ? option.sWidth : true;
    this.sHeight = (isOptionEnable && typeof option.sHeight !== 'undefined') ? option.sHeight : true;
    this.dWidth = (isOptionEnable && typeof option.dWidth !== 'undefined') ? option.dWidth : true;
    this.dHeight = (isOptionEnable && typeof option.dHeight !== 'undefined') ? option.dHeight : true;
  }

  render(context) {
    const ctx = super.setCtx(context);
    
    if (this.dWidth === true)
      ctx.drawImage(this.image, this.dx, this.dy);
    else if (this.sx === true)
      ctx.drawImage(this.image, this.dx, this.dy, this.dWidth, this.dHeight);
    else 
      ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
      
    ctx.closePath();
  }
}

export class Renderer extends Objecty {
  constructor(...objects) {
    super();
    this.objs = objects;
  }

  render(context) {
    this.ctx = context;
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.objs.forEach(obj => {
      obj.render(this.ctx);
    });
  }
}
