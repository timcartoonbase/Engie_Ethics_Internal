var ourPurpose = bodymovin.loadAnimation({
  container: document.getElementById('ourPurpose'),
  path: '01_purpose.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "01_purpose",
});

var corruption = bodymovin.loadAnimation({
  container: document.getElementById('corruption'),
  path: '02_corruption.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "02_corruption",
});

var respect = bodymovin.loadAnimation({
  container: document.getElementById('respect'),
  path: '03_respect.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "03_respect",
});

var respect = bodymovin.loadAnimation({
  container: document.getElementById('environment'),
  path: '04_environment.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "04_environment",
});

var compliance = bodymovin.loadAnimation({
  container: document.getElementById('compliance'),
  path: '05_compliance.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "05_compliance",
});

var integrity = bodymovin.loadAnimation({
  container: document.getElementById('integrity'),
  path: '06_integrity.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "06_integrity",
});

var tolerance = bodymovin.loadAnimation({
  container: document.getElementById('tolerance'),
  path: '07_tolerance.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "07_tolerance",
});

var report = bodymovin.loadAnimation({
  container: document.getElementById('report'),
  path: '08_report.json',
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  name: "08_report",
});

const player = document.querySelector('#star')
    player.addEventListener('ready', () => {
  LottieInteractivity.create({
    player: '#star',
    mode: 'scroll',
    actions: [
      {
        visibility: [0.13,0.91],
        type: 'seek',
        frames: [0, 499],
      },
    ]
  });
});

console.log(player.totalFrames)