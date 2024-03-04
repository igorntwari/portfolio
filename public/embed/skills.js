const DOT_RADIUS = 64;
const SCALE = 1.1;
const MIN_SPEED = 0.0007;
const MOUSE_SPEED = 0.05;

let svgs = document.getElementById("svg-container");
let COLORS = Array(svgs.children.length);
let PATHS = [...svgs.children].map((svg, i) => {
  if (svg.children[0].tagName === "g") {
    svg = svg.children[0];
    COLORS[i] = Array(svg.children.length);
    COLORS[i][0] = svg.getAttribute("fill");
  } else {
    COLORS[i] = Array(svg.children.length);
  }
  return [...svg.children].map((e, j) => {
    let c = e.getAttribute("fill");
    if (c !== null) {
      console.log(c);
      COLORS[i][j] = c;
    } else {
      COLORS[i][j] = COLORS[i][0] ? COLORS[i][0] : "#FFF";
    }
    return new Path2D(e.getAttribute("d"));
  });
});
const SAMPLES = PATHS.length;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let PERSPECTIVE;
let PROJECTION_CENTER_X;
let PROJECTION_CENTER_Y;
let GLOBE_RADIUS;

function onResize() {
  PERSPECTIVE = width * 0.8;
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  GLOBE_RADIUS = width / 4;
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;

  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
}
window.addEventListener("resize", onResize);
onResize();

let PHI = Math.PI * (3.0 - Math.sqrt(5.0));
let VX = MIN_SPEED;
let VY = MIN_SPEED;
let VZ = MIN_SPEED;
let mouse_x = 0;
let mouse_y = 0;
let mouse_moving = false;

canvas.addEventListener("mousemove", (e) => {
  mouse_moving = true;
  mouse_x = e.offsetX - width / 2;
  mouse_y = e.offsetY - height / 2;
  VY = (MOUSE_SPEED * mouse_x) / width;
  VZ = (MOUSE_SPEED * mouse_y) / height;
});
canvas.addEventListener(
  "mouseout",
  function () {
    mouse_moving = false;
    let theta =
      -1 * Math.atan2(mouse_y - height / 2, mouse_x - width / 2) +
      Math.PI * 0.5;
    console.log(theta);

    function slowDownSpin() {
      if (mouse_moving) {
        return;
      }
      VZ /= 1.3;
      VY /= 1.3;
      if (Math.abs(VZ) <= MIN_SPEED) {
        VZ = Math.sign(VZ) * MIN_SPEED;
      }
      if (Math.abs(VY) <= MIN_SPEED) {
        VY = Math.sign(VY) * MIN_SPEED;
      }
      if (VZ === MIN_SPEED || VY === MIN_SPEED) {
        return;
      }
      setTimeout(slowDownSpin, 200);
    }
    slowDownSpin();
  },
  false
);

class Dot {
  constructor(i, paths) {
    this.colors = COLORS[i];
    this.y = 1 - (i / (SAMPLES - 1)) * 2;
    let radius = Math.sqrt(1 - this.y * this.y);
    this.theta = PHI * i;
    this.x = Math.cos(this.theta) * radius;
    this.z = Math.sin(this.theta) * radius;
    this.paths = paths;
    this.xProjected = 0;
    this.yProjected = 0;
    this.scaleProjected = 0;
  }
  rotate() {
    let x1 = this.x * Math.cos(VX) - this.y * Math.sin(VX);
    let y1 = this.x * Math.sin(VX) + this.y * Math.cos(VX);

    let x2 = x1 * Math.cos(VY) - this.z * Math.sin(VY);
    let z2 = x1 * Math.sin(VY) + this.z * Math.cos(VY);

    let y3 = y1 * Math.cos(VZ) - z2 * Math.sin(VZ);
    let z3 = y1 * Math.sin(VZ) + z2 * Math.cos(VZ);
    this.x = x2;
    this.y = y3;
    this.z = z3;
  }
  project() {
    this.rotate();
    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z * GLOBE_RADIUS);
    this.xProjected =
      this.x * GLOBE_RADIUS * this.scaleProjected +
      PROJECTION_CENTER_X -
      DOT_RADIUS * this.scaleProjected;
    this.yProjected =
      this.y * GLOBE_RADIUS * this.scaleProjected +
      PROJECTION_CENTER_Y -
      DOT_RADIUS * this.scaleProjected;
  }
  draw() {
    this.project();
    ctx.save();

    ctx.globalAlpha = Math.abs(1 - (this.z * 3 * GLOBE_RADIUS) / width);
    ctx.beginPath();
    ctx.translate(this.xProjected, this.yProjected);
    ctx.scale(
      (this.scaleProjected * SCALE * width) / 1920,
      (this.scaleProjected * SCALE * width) / 1920
    );

    this.paths.forEach((path, i) => {
      ctx.fillStyle = this.colors[i];

      ctx.fill(path);
    });

    ctx.restore();
  }
}
const dots = PATHS.map((e, i) => new Dot(i, e));

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  dots.sort((dot1, dot2) => {
    return dot1.scaleProjected - dot2.scaleProjected;
  });

  dots.forEach((dot) => {
    dot.draw();
  });
  window.requestAnimationFrame(render);
}
render();
