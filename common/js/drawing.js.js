// drawing.js - 绘图工具库

// 画带箭头的线
function drawArrow(ctx, x1, y1, x2, y2, color = '#000', lineWidth = 2) {
    var head = 10;
    var angle = Math.atan2(y2-y1, x2-x1);
    
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // 画箭头头
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
    ctx.fill();
}

// 画虚线
function drawDottedLine(ctx, x1, y1, x2, y2, color = '#777') {
    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

// 画实心圆点
function drawPoint(ctx, x, y, color='#333', radius=4) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill();
}