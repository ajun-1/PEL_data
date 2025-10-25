(function () {
  function addScript(src, onload, onerror) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = onload;
    s.onerror = onerror;
    document.head.appendChild(s);
    return s;
  }

  function loadEcharts(opts) {
    opts = opts || { timeout: 6000 };
    return new Promise(function (resolve, reject) {
      if (window.echarts) return resolve(window.echarts);
      var timer = setTimeout(function () { reject(new Error('ECharts load timeout')); }, opts.timeout);
      function cleanup() { clearTimeout(timer); }

      var sources = [
        './js/echarts.min.js',
        './vendor/echarts/echarts.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js',
        'https://unpkg.com/echarts@5/dist/echarts.min.js',
        'https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js'
      ];
      var i = 0;

      function tryNext() {
        if (i >= sources.length) { cleanup(); reject(new Error('ECharts failed to load from all sources')); return; }
        var src = sources[i++];
        addScript(src, function () {
          if (window.echarts) { cleanup(); resolve(window.echarts); }
          else { tryNext(); }
        }, function () { tryNext(); });
      }

      tryNext();
    });
  }

  window.loadEcharts = loadEcharts;
})();