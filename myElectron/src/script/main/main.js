var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: $('section').height(),
      triggerHook: .025,
      reverse: true
    }
  });
  var scenes = {
    'intro': {
      'intro': 'intro-anchor'
    },
    'scene2': {
      'section-1': 'anchor1'
    },
    'scene3': {
      'section-2': 'anchor2'
    },
    'scene4': {
      'section-3': 'anchor3'
    }
  }
  
  for(var key in scenes) {
    if (!scenes.hasOwnProperty(key)) continue;
  
    var obj = scenes[key];
  
    for (var prop in obj) {
      // skip loop if the property is from prototype
      if(!obj.hasOwnProperty(prop)) continue;
  
      new ScrollMagic.Scene({ triggerElement: '#' + prop })
          .setClassToggle('#' + obj[prop], 'active')
          .addTo(controller);
    }
  }
  controller.scrollTo(function(target) {
  
    TweenMax.to(window, 0.5, {
      scrollTo : {
        y : target,
        autoKill : true // Allow scroll position to change outside itself
      },
      ease : Cubic.easeInOut
    });
  
  });
  var anchor_nav = document.querySelector('.anchor-nav');
  
  anchor_nav.addEventListener('click', function(e) {
    var target = e.target,
        id     = target.getAttribute('href');
  
    if(id !== null) {
      if(id.length > 0) {
        e.preventDefault();
        controller.scrollTo(id);
  
        if(window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    }
  });