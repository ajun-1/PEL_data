(function () {
  function initCharts(echarts) {
    var mapEl = function (id) { return document.getElementById(id); };
    var growthEl = mapEl('growthBar');
    var activityEl = mapEl('activityBar');
    var trendEl = mapEl('trendLine');
    var exposureEl = mapEl('exposureRankBar');
    var engageEl = mapEl('engageRankBar');
    var donutEl = mapEl('contentDonut');
    var funnelEl = mapEl('funnelConv');
    var heatEl = mapEl('heatTrend');
    var gaugeEl = mapEl('scoreGauge');

    var palette = ['#4caf50', '#2196f3', '#ff9800', '#e91e63', '#9c27b0'];

    var inst = {};

    if (growthEl) {
      inst.growth = echarts.init(growthEl);
    }
    if (activityEl) {
      inst.activity = echarts.init(activityEl);
    }
    if (trendEl) {
      inst.trend = echarts.init(trendEl);
    }
    if (exposureEl) {
      inst.exposure = echarts.init(exposureEl);
    }
    if (engageEl) {
      inst.engage = echarts.init(engageEl);
    }
    if (donutEl) {
      inst.donut = echarts.init(donutEl);
    }
    if (funnelEl) {
      inst.funnel = echarts.init(funnelEl);
    }
    if (heatEl) {
      inst.heat = echarts.init(heatEl);
    }
    if (gaugeEl) {
      inst.gauge = echarts.init(gaugeEl);
    }

    // 数据
    var growthData = [1200, 980, 650, 420, 360];
    var growthCats = ['抖音', '快手', 'B站', '微博', '小红书'];

    var activityDataA = [620, 510, 460, 390, 340];
    var activityDataB = [480, 420, 360, 310, 280];
    var activityCats = ['视频', '图文', '直播', '赛事', '社区'];

    var trendCats = ['T-11','T-10','T-9','T-8','T-7','T-6','T-5','T-4','T-3','T-2','T-1','T'];
    var trendData = [360, 420, 390, 510, 480, 560, 610, 590, 640, 700, 720, 780];

    var exposureCats = ['抖音','快手','B站','微博','小红书'];
    var exposureData = [1250, 980, 760, 540, 420];

    var engageCats = ['抖音','快手','B站','微博','小红书'];
    var engageData = [860, 690, 540, 420, 350];

    var contentCats = ['视频','图文','直播','赛事','社区'];
    var contentData = [42, 28, 12, 10, 8];

    var funnelData = [100, 62, 38, 9]; // 曝光→访问→互动→转化

    var heatCats = (function(){ var arr=[]; for(var i=0;i<24;i++){arr.push('H'+(i+1));} return arr; })();
    var heatData = (function(){ var arr=[]; var v=320; for(var i=0;i<24;i++){ v = Math.max(220, v + Math.round(Math.random()*40-20)); arr.push(v);} return arr; })();

    var scoreValue = 86.2;

    // 配置与初始化
    if (inst.growth) {
      inst.growth.setOption({
        backgroundColor: 'transparent',
        grid: { left: 40, right: 18, top: 24, bottom: 28 },
        xAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'category', data: growthCats, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'bar', data: growthData, barWidth: 18, itemStyle: { color: palette[1] } }],
        animationDuration: 800,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.activity) {
      inst.activity.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        legend: { data: ['互动', '产量'], textStyle: { color: '#b6c2d2' } },
        grid: { left: 40, right: 18, top: 30, bottom: 28 },
        xAxis: { type: 'category', data: activityCats, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        series: [
          { name: '互动', type: 'bar', data: activityDataA, itemStyle: { color: palette[2] }, barWidth: 16 },
          { name: '产量', type: 'bar', data: activityDataB, itemStyle: { color: palette[0] }, barWidth: 16 }
        ],
        animationDuration: 800,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.trend) {
      inst.trend.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 18, top: 24, bottom: 28 },
        xAxis: { type: 'category', data: trendCats, boundaryGap: false, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'line', data: trendData, smooth: true, symbolSize: 6, lineStyle: { width: 2, color: palette[1] }, areaStyle: { color: 'rgba(33, 150, 243, 0.15)' } }],
        animationDuration: 800,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.exposure) {
      inst.exposure.setOption({
        backgroundColor: 'transparent',
        grid: { left: 40, right: 20, top: 24, bottom: 28 },
        xAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'category', data: exposureCats, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'bar', data: exposureData, barWidth: 14, itemStyle: { color: palette[1] } }],
        animationDuration: 700,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.engage) {
      inst.engage.setOption({
        backgroundColor: 'transparent',
        grid: { left: 40, right: 20, top: 24, bottom: 28 },
        xAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'category', data: engageCats, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'bar', data: engageData, barWidth: 14, itemStyle: { color: palette[2] } }],
        animationDuration: 700,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.donut) {
      inst.donut.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { color: '#b6c2d2' } },
        series: [{
          type: 'pie',
          radius: ['45%', '70%'],
          label: { color: '#c8d2df' },
          data: contentCats.map(function (n, i) { return { name: n, value: contentData[i], itemStyle: { color: palette[i % palette.length] } }; })
        }],
        animationDuration: 700,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.funnel) {
      inst.funnel.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item' },
        series: [{
          type: 'funnel',
          left: '10%',
          width: '80%',
          top: 20,
          bottom: 20,
          label: { color: '#c8d2df' },
          data: [
            { name: '曝光', value: funnelData[0], itemStyle: { color: palette[1] } },
            { name: '访问', value: funnelData[1], itemStyle: { color: palette[2] } },
            { name: '互动', value: funnelData[2], itemStyle: { color: palette[0] } },
            { name: '转化', value: funnelData[3], itemStyle: { color: palette[3] } }
          ]
        }],
        animationDuration: 700,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.heat) {
      inst.heat.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 18, top: 24, bottom: 28 },
        xAxis: { type: 'category', data: heatCats, boundaryGap: false, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'line', data: heatData, smooth: true, symbolSize: 5, lineStyle: { width: 2, color: palette[4] }, areaStyle: { color: 'rgba(156, 39, 176, 0.15)' } }],
        animationDuration: 800,
        animationEasing: 'cubicOut'
      });
    }

    if (inst.gauge) {
      inst.gauge.setOption({
        backgroundColor: 'transparent',
        series: [{
          type: 'gauge',
          progress: { show: true, width: 10 },
          axisLine: { lineStyle: { width: 10, color: [[0.5, '#e91e63'], [0.75, '#ff9800'], [1, '#4caf50']] } },
          axisLabel: { color: '#b6c2d2' },
          pointer: { itemStyle: { color: '#fff' } },
          detail: { valueAnimation: true, formatter: function (v) { return v.toFixed(1) + '%'; }, color: '#e7edf5' },
          data: [{ value: scoreValue }]
        }],
        animationDuration: 600,
        animationEasing: 'cubicOut'
      });
    }

    // 动效播放与停止
    var playBtn = document.getElementById('animatePlay');
    var stopBtn = document.getElementById('animateStop');
    var timer = null;

    function tick() {
      // 扰动数据形成动效
      growthData = growthData.map(function (v) { return Math.max(120, Math.round(v + (Math.random() * 120 - 60))); });
      activityDataA = activityDataA.map(function (v) { return Math.max(100, Math.round(v + (Math.random() * 80 - 40))); });
      activityDataB = activityDataB.map(function (v) { return Math.max(80, Math.round(v + (Math.random() * 60 - 30))); });

      var d = Math.max(260, Math.round(trendData[trendData.length - 1] + (Math.random() * 80 - 40)));
      trendData.shift();
      trendData.push(d);

      exposureData = exposureData.map(function (v) { return Math.max(200, Math.round(v + (Math.random() * 100 - 50))); });
      engageData = engageData.map(function (v) { return Math.max(160, Math.round(v + (Math.random() * 90 - 45))); });

      contentData = contentData.map(function (v) { return Math.max(5, Math.round(v + (Math.random() * 6 - 3))); });
      var sum = contentData.reduce(function (a, b) { return a + b; }, 0);
      contentData = contentData.map(function (v) { return Math.round(v / sum * 100); });

      funnelData = [100, 60 + Math.round(Math.random()*10), 36 + Math.round(Math.random()*8), 8 + Math.round(Math.random()*4)];

      heatData.shift();
      heatData.push(Math.max(220, Math.round(heatData[heatData.length - 1] + (Math.random() * 40 - 20))));

      scoreValue = Math.max(55, Math.min(97, Math.round((scoreValue + (Math.random()*4 - 2))*10)/10));

      if (inst.growth) inst.growth.setOption({ series: [{ data: growthData }] });
      if (inst.activity) inst.activity.setOption({ series: [{ data: activityDataA }, { data: activityDataB }] });
      if (inst.trend) inst.trend.setOption({ series: [{ data: trendData }] });
      if (inst.exposure) inst.exposure.setOption({ series: [{ data: exposureData }] });
      if (inst.engage) inst.engage.setOption({ series: [{ data: engageData }] });
      if (inst.donut) inst.donut.setOption({ series: [{ data: contentCats.map(function (n, i) { return { name: n, value: contentData[i], itemStyle: { color: palette[i % palette.length] } }; }) }] });
      if (inst.funnel) inst.funnel.setOption({ series: [{ data: [ { name: '曝光', value: funnelData[0], itemStyle: { color: palette[1] } }, { name: '访问', value: funnelData[1], itemStyle: { color: palette[2] } }, { name: '互动', value: funnelData[2], itemStyle: { color: palette[0] } }, { name: '转化', value: funnelData[3], itemStyle: { color: palette[3] } } ] }] });
      if (inst.heat) inst.heat.setOption({ series: [{ data: heatData }] });
      if (inst.gauge) inst.gauge.setOption({ series: [{ data: [{ value: scoreValue }] }] });
    }

    if (playBtn) playBtn.addEventListener('click', function () { if (!timer) timer = setInterval(tick, 2000); });
    if (stopBtn) stopBtn.addEventListener('click', function () { if (timer) { clearInterval(timer); timer = null; } });

    window.addEventListener('resize', function () { Object.keys(inst).forEach(function (k) { inst[k].resize(); }); });
  }

  function showFallback() {
    var ids = ['growthBar', 'activityBar', 'trendLine', 'exposureRankBar', 'engageRankBar', 'contentDonut', 'funnelConv', 'heatTrend', 'scoreGauge'];
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = '<div class="chart-fallback">图表库未加载，显示占位。</div>';
    });
  }

  function init() {
    if (typeof window.loadEcharts !== 'function') { showFallback(); return; }
    window.loadEcharts({ timeout: 6000 }).then(function (echarts) {
      initCharts(echarts);
    }).catch(function () { showFallback(); });
  }

  document.addEventListener('DOMContentLoaded', init);
})();



// 新增：在同一脚本中初始化性别环图、效率雷达、互动堆叠条图
(function(){
  function initNewCharts(echarts){
    var genderEl = document.getElementById('genderDonut');
    var radarEl = document.getElementById('efficiencyRadar');
    var interactionEl = document.getElementById('interactionStackBar');
    var ageEl = document.getElementById('ageDist');

    // 年龄分布条形图
    if (ageEl){
      var ageChart = echarts.init(ageEl);
      var ageCats = ['≤17','18-24','25-34','35-44','45+'];
      var ageData = [6, 28, 37, 20, 9];
      ageChart.setOption({
        backgroundColor: 'transparent',
        grid: { left: 40, right: 18, top: 24, bottom: 28 },
        xAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'category', data: ageCats, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        series: [{ type: 'bar', data: ageData, barWidth: 16, itemStyle: { color: '#165DFF' } }]
      });
      window.addEventListener('resize', function(){ ageChart.resize(); });
    }

    // 性别分布环图
    if (genderEl){
      var genderChart = echarts.init(genderEl);
      var genderData = [
        { name: '男性', value: 52.4, itemStyle: { color: '#165DFF' } },
        { name: '女性', value: 47.6, itemStyle: { color: '#0FC6C2' } }
      ];
      genderChart.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { color: '#b6c2d2' } },
        series: [{ type: 'pie', radius: ['50%', '70%'], label: { color: '#c8d2df' }, data: genderData }]
      });
      window.addEventListener('resize', function(){ genderChart.resize(); });
    }

    // 效率能力雷达
    if (radarEl){
      var radarChart = echarts.init(radarEl);
      var indicator = [
        { name: '内容质量', max: 100 },
        { name: '响应效率', max: 100 },
        { name: '互动率', max: 100 },
        { name: '传播广度', max: 100 },
        { name: '留存稳定', max: 100 },
        { name: '增长速度', max: 100 }
      ];
      var values = [82, 74, 68, 79, 72, 65];
      radarChart.setOption({
        backgroundColor: 'transparent',
        tooltip: {},
        legend: { show: false },
        radar: { indicator: indicator, axisName: { color: '#c8d2df' }, splitLine: { lineStyle: { color: '#273246' } }, splitArea: { areaStyle: { color: ['rgba(38,43,52,.6)','rgba(38,43,52,.4)','rgba(38,43,52,.2)','rgba(38,43,52,.1)'] } } },
        series: [{ type: 'radar', data: [{ value: values, name: '综合效率', areaStyle: { color: 'rgba(22,93,255,0.25)' }, lineStyle: { color: '#165DFF' }, symbol: 'none' }] }]
      });
      window.addEventListener('resize', function(){ radarChart.resize(); });
    }

    // 互动构成堆叠条图
    if (interactionEl){
      var interactionChart = echarts.init(interactionEl);
      var platforms = ['抖音','快手','B站','微博','小红书'];
      var likeData = [420, 360, 280, 210, 180];
      var commentData = [240, 200, 160, 140, 120];
      var shareData = [200, 170, 120, 110, 90];
      interactionChart.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        legend: { data: ['点赞','评论','分享'], textStyle: { color: '#b6c2d2' } },
        grid: { left: 40, right: 24, top: 30, bottom: 28 },
        xAxis: { type: 'value', axisLine: { lineStyle: { color: '#2b3746' } }, splitLine: { lineStyle: { color: '#273246' } }, axisLabel: { color: '#b6c2d2' } },
        yAxis: { type: 'category', data: platforms, axisLine: { lineStyle: { color: '#2b3746' } }, axisLabel: { color: '#b6c2d2' } },
        series: [
          { name: '点赞', type: 'bar', stack: 'total', barWidth: 16, itemStyle: { color: '#2196f3' }, data: likeData },
          { name: '评论', type: 'bar', stack: 'total', barWidth: 16, itemStyle: { color: '#ff9800' }, data: commentData },
          { name: '分享', type: 'bar', stack: 'total', barWidth: 16, itemStyle: { color: '#4caf50' }, data: shareData }
        ]
      });
      window.addEventListener('resize', function(){ interactionChart.resize(); });
    }
  }

  function showFallbackNew(){
    ['ageDist','genderDonut','efficiencyRadar','interactionStackBar'].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.innerHTML = '<div class="chart-fallback">图表库未加载，显示占位。</div>';
    });
  }

  function init(){
    if (typeof window.loadEcharts !== 'function'){ showFallbackNew(); return; }
    window.loadEcharts({ timeout: 6000 }).then(function(echarts){ initNewCharts(echarts); }).catch(function(){ showFallbackNew(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();