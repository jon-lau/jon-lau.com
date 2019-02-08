var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    HALF_WIDTH = window.innerWidth / 2,
    HALF_HEIGHT = window.innerHeight / 2,

    // canvas element and 2D context
    canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),

    mouseX = HALF_WIDTH, mouseY = HALF_HEIGHT, mouseDown = false,

    particles = [],
    MAX_PARTICLES = 450,
    particleImage = new Image(),

    stats;

init();
setInterval(loop, 1000 / 30);

function init() {

  // CANVAS SET UP

  container = document.createElement('div');
  document.body.appendChild(container);

  container.appendChild(canvas);
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  container.appendChild(stats.domElement);

  particleImage.src = '../images/particle/ParticleBlue.png';

  document.addEventListener('mousemove', onMouseMove, false);

  document.addEventListener('mousedown', onMouseDown, false);
  document.addEventListener('mouseup', onMouseUp, false);

}

//

function onMouseMove(event) {

  event.preventDefault();

  mouseX = event.clientX;
  mouseY = event.clientY;

}

function onMouseDown(event) {
  mouseDown = true;

}
function onMouseUp(event) {
  mouseDown = false;

}

//

function loop() {

  // make some particles
  if (mouseDown)
    makeParticle(8);
  else
    makeParticle(1);

  // clear the canvas
  context.fillStyle = "rgba(0,0,0,0.2)";
  context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

  // iteratate through each particle
  for (i = 0; i < particles.length; i++) {
    var particle = particles[i];

    // render it
    particle.render(context);

    // and then update. We always render first so particle
    // appears in the starting point.
    particle.update();

    //Very simple collision detection with the floor

    if (particle.posY > SCREEN_HEIGHT - 100) {
      particle.velY *= -0.9;
      particle.posY = SCREEN_HEIGHT - 100;
    }

  }

  // Keep taking the oldest particles away until we have
  // fewer than the maximum allowed.

  while (particles.length > MAX_PARTICLES)
    particles.shift();

  stats.update();
}

function makeParticle(particleCount) {

  for (var i = 0; i < particleCount; i++) {

    // create a new particle in the middle of the stage
    //var particle = new ImageParticle(particleImage, HALF_WIDTH, HALF_HEIGHT);
    var particle = new ImageParticle(particleImage, mouseX, mouseY);

    // give it a random x and y velocity
    particle.velX = randomRange(-15, 15);
    particle.velY = randomRange(-15, 15);
    particle.size = randomRange(0.1, 0.4);
    particle.gravity = 1;
    particle.drag = 0.98;
    particle.shrink = 0.97;

    // sets the blend mode so particles are drawn with an additive blend
    particle.compositeOperation = 'lighter';

    // add it to the array
    particles.push(particle);

  }

}
