
let tlHome = new TimelineMax();
tlHome.timeScale(2);
tlHome.from('.inHome', 3, {
    opacity: 0,
    delay: 3
  })
  .to('.inHome', 1.5, {
    opacity: 0,
    y: -80,
    delay: 5
  })
  .to('.hider', 0, {
    display: 'none'
  })
  .from('.avatar', .7, {
    opacity: 0,
    x: -190
  })
  .from('.content h2', .7, {
    opacity: 0,
    rotation: -30,
    y: -150
  })
  .from('.content h1', .7, {
    opacity: 0,
    rotation: -30,
    y: -150
  })
  .from('.content h4', .7, {
    opacity: 0,
    y: 40,
    x: -45,
    rotation: -30
  })
  .from('.bio', .7, {
    opacity: 0,
    y: 40,
  })
  .staggerFrom('.social a', .1, {
    opacity: 0,
    y: 40
  }, .1)
  .from('.works', .7, {
    opacity: 0,
    y: 40
  })
  .from('.cover .imgHolder', 1.7, {
    x: '200%',
    ease: Back.easeOut.config(1)
  })
  .from('.cover .coverBg', .7, {
    x: '200%',
    ease: Power2.easeIn
  })
  .from('#dots', 1.9, { scale: 0, opacity: 0 })

let tlProjects = new TimelineMax();
tlProjects.timeScale(2);
tlProjects.from('.inProject', 3, {
    opacity: 0,
    delay: 3
  })
  .to('.inProject', 1.5, {
    opacity: 0,
    y: -80,
    delay: 5
  })


function outPageTransition() {
  tlHome.reverse(0).kill(null, '.inHome');
}

$('.goTo').click(function(e) {
  e.preventDefault();
  outPageTransition()
  var linkUrl = $(this).attr('href');
  setTimeout( function(url) { window.location = url; }, 3500, linkUrl );
});

particlesJS(
  'dots', {
    'particles': {
      'number': {
        'value': 35 // set dots numbers ←
      },
      'color': {
        // set colors and number of colors ↓
        'value': ['#FFAB40', '#FFE082', '#FFD740']
      },
      'shape': {
        'type': 'circle'
      },
      'opacity': {
        'value': 1,
        'random': true,
        'anim': {
          'enable': false
        }
      },
      'size': {
        'value': 4, // set dots size ←
        'random': true,
        'anim': {
          'enable': false,
        }
      },
      'line_linked': {
        'enable': false
      },
      'move': {
        'enable': true,
        'speed': 2, // set speed ←
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out'
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false
        },
        'onclick': {
          'enable': false
        },
        'resize': true
      }
    },
    'retina_detect': true
  });