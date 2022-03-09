const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth - 160;
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

function drawPoint(x_coor, y_coor) {
  ctx.beginPath();
  start_x = (width / 2) + x_coor;
  start_y = (height / 2) + y_coor;
  ctx.moveTo(start_x, start_y);
  ctx.lineTo(start_x + 1, start_y + 1);
  ctx.stroke();
}

function findPi(num_points) {
  let r_width = width / 2.5;
  let r_height = height / 2.5;
  let radius = width > height ? r_height : r_width;

  let count = 0;
  let red = 0;
  let green = 0;

  while (count < num_points) {
    let x = (Math.random() * 2 - 1) * radius;
    let y = (Math.random() * 2 - 1) * radius;
    if (Math.sqrt(x*x + y*y) <= radius) {
      ctx.strokeStyle = 'rgb(50, 255, 50)';
      green++;
    }
    else {
      ctx.strokeStyle = 'rgb(255, 50, 50)';
      red++;
    }
    drawPoint(x, y);
    count++;
  }
  let pi = 4 * green / count
  console.log(pi);
  return pi;
}

drawCircle();
drawSquare();

findPi(10000);