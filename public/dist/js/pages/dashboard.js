/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $(".knob").knob();

  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };
  //World map by jvectormap
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ["#92c1dc", "#ebf4f9"],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  //Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });

  //The Calender
  $("#calendar").datepicker();

  //SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [
      {y: '2014 Q1', item1: 2666, item2: 2666, item3: 1132},
      {y: '2014 Q2', item1: 2778, item2: 2294, item3: 2142},
      {y: '2014 Q3', item1: 4912, item2: 1969, item3: 2732},
      {y: '2014 Q4', item1: 3767, item2: 3597, item3: 1986},
      {y: '2015 Q1', item1: 6810, item2: 1914, item3: 3308},
      {y: '2015 Q2', item1: 5670, item2: 4293, item3: 5320},
      {y: '2015 Q3', item1: 4820, item2: 3795, item3: 4805},
      {y: '2015 Q4', item1: 15073, item2: 5967, item3: 7086},
      {y: '2016 Q1', item1: 10687, item2: 4460, item3: 13463},
      {y: '2016 Q2', item1: 8432, item2: 5713, item3: 9087},
      {y: '2016 Q3', item1: 10432, item2: 4313, item3: 6783}
    ],
    xkey: 'y',
    ykeys: ['item1', 'item2', 'item3'],
    labels: ['下载', '激活', '活跃'],
    lineColors: ['#a0d0e0', '#3c8dbc', '#a8f7e9'],
    hideHover: 'auto'
  });
  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [
      {y: '2014 Q1', item1: 35675, item2: 2094, item3: 6414, item4: 37261},
      {y: '2014 Q2', item1: 27781, item2: 3014, item3: 8412, item4: 63920},
      {y: '2014 Q3', item1: 49124, item2: 4103, item3: 7392, item4: 19473},
      {y: '2014 Q4', item1: 37673, item2: 3253, item3: 5352, item4: 83918},
      {y: '2015 Q1', item1: 68109, item2: 5326, item3: 5643, item4: 63921},
      {y: '2015 Q2', item1: 56702, item2: 1873, item3: 8731, item4: 92472},
      {y: '2015 Q3', item1: 48205, item2: 4097, item3: 5321, item4: 57203},
      {y: '2015 Q4', item1: 75073, item2: 3031, item3: 9472, item4: 84823},
      {y: '2016 Q1', item1: 55687, item2: 4531, item3: 8932, item4: 92723},
      {y: '2016 Q2', item1: 84328, item2: 5932, item3: 5402, item4: 72631}
    ],
    xkey: 'y',
    ykeys: ['item1', 'item2', 'item3', 'item4'],
    labels: ['双色球', '七乐彩', '3D', '动物总动员'],
    lineColors: ['#efefef', '#1fabde', '#4523DF', '#ADe31F', '#f2d2cb'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef", "#1fabde", '#4523DF', '#ADe31F', '#f2d2cb'],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#f56954", "#00a65a", "#33ddbc", "#a56f54", "#0f13ba", "#3c3aec", "#f341a4", "#11F65a", "#83cdbc", "#f36854", "#07ab5a", "#3281bc", "#f7E954"],
    data: [
      {label: "360", value: 12303},
      {label: "豌豆荚", value: 3027},
      {label: "机锋", value: 129},
      {label: "百度", value: 8973},
      {label: "安智", value: 321},
      {label: "应用汇", value: 7801},
      {label: "应用宝", value: 10921},
      {label: "联想", value: 5930},
      {label: "易用汇", value: 1203},
      {label: "魅族", value: 1003},
      {label: "华为", value: 2094},
      {label: "OPPO", value: 4072},
      {label: "vivo", value: 1705},
      {label: "安卓市场", value: 9091},
    ],
    hideHover: 'auto'
  });

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });

});
