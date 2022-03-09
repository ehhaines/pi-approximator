const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
ctx.lineWidth = 2;

function drawCircle () {
  let r_width = width / 2.5;
  let r_height = height / 2.5;
  let radius = r_width;
  if (width > height) {
    radius = r_height;
  }

  x_center = canvas.width / 2;
  y_center = canvas.height / 2;

  ctx.beginPath();
  ctx.arc(x_center, y_center, radius, 0 , 2 * Math.PI, false);
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.stroke();
}

function drawLine(start_x, start_y, end_x, end_y) {
  ctx.beginPath();
  ctx.moveTo(start_x, start_y);
  ctx.lineTo(end_x, end_y);
  ctx.stroke();
}

function drawSquare(side_length) {
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  let x_center = canvas.width / 2;
  let y_center = canvas.height / 2;
  let r_width = width / 2.5;
  let r_height = height / 2.5;
  let radius = width > height ? r_height : r_width;

  drawLine(x_center + radius, y_center - radius, x_center + radius, y_center + radius);
  drawLine(x_center + radius, y_center + radius, x_center - radius, y_center + radius);
  drawLine(x_center - radius, y_center + radius, x_center - radius, y_center - radius);
  drawLine(x_center - radius, y_center - radius, x_center + radius, y_center - radius)
}

drawCircle();
drawSquare();