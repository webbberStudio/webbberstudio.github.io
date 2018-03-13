new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [{
      day: '18 Mar',
      views: 20
    },
    {
      day: '19 Mar',
      views: 40
    },
    {
      day: '20 Mar',
      views: 20
    },
    {
      day: '21 Mar',
      views: 0
    },
    {
      day: '22 Mar',
      views: 13
    },
    {
      day: '23 Mar',
      views: 0
    },
    {
      day: '24 Mar',
      views: 0
    },
    {
      day: '25 Mar',
      views: 0
    },
    {
      day: '26 Mar',
      views: 20
    },
    {
      day: '27 Mar',
      views: 10
    },
    {
      day: '28 Mar',
      views: 13
    },
    {
      day: '29 Mar',
      views: 20
    },
    {
      day: '30 Mar',
      views: 14
    },
    {
      day: '31 Mar',
      views: 30
    },
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'day',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['views'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['views'],
  smooth: false,
  ymax : 70, ymin : -20,
  goals: [1.0, -1.0],
  numLines: 5,
  lineWidth: 4,
  lineColors: ['#348aa3'],
  goalStrokeWidth: 0,
  // eventLineColors: ['#000'],
  pointSize: 5,
  resize: true,
  grid: true,
  axes: true,
  // verticalGrid: true
});

