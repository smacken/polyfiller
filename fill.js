// config flags indicating which polyfils to use
var poly-config = {
  canvas: false,
  forms: {
    placeholder: true,
    date-picker: false
  },
  css3: true,
  history: true,
  media-queries: true
};

// possible link with configuration to avoid the 'all or nothing' approach
// e.g. poly-config is the config indicating which polyfils to use
//Modernizr.load({
//  test: Modernizr.canvas && poly-config.canvas,
//  nope: 'http://flashcanvas.net/bin/flashcanvas.js'
//});
//
// Failover: if the fils cannot be loaded from cdn then it should test
// and failover to a lib/ version
// 

function flag(config){
  return !config;
}


Modernizr.load({
  test: Modernizr.canvas && flag(poly-config.canvas),
  nope: 'http://flashcanvas.net/bin/flashcanvas.js'
});

Modernizr.load({
  test: Modernizr.history,
  nope: '//cdnjs.cloudflare.com/ajax/libs/history.js/1.7.1/native.history.js'
});

// Css3 selectors: generated content is :before, :after etc
Modernizr.load({
  test: Modernizr.generatedcontent,
  nope: '//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js'
});


Modernizr.load({
  test: Modernizr.placeholder,
  nope: '//cdnjs.cloudflare.com/ajax/libs/placeholder-shiv/0.2/placeholder-shiv.js'
});

// IE 6-8 shim for media query support (min, max)
Modernizr.load({
  test: Modernizr.mq('only all'),
  nope: '//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js'
});

Modernizr.load({
  test: Modernizr.multiplebgs || Modernizr.boxshadow,
  nope: '//cdnjs.cloudflare.com/ajax/libs/css3pie/1.0.0/PIE.js'
});

Modernizr.load({
  test: window.JSON,
  nope: '//cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min.js'
});