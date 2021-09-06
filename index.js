Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

// Request data using D3
d3.csv("World.csv").then(makeChart);

function makeChart(data) {


    var Labels = data.map(function (d) { return d.Name });
    var ScoreData = data.map(function (d) { return +d.Cases });


    var chart = new Chart('chart', {
        type: 'horizontalBar',
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Total Cases by Country',
                            fontSize: 16
                        }
                    }
                ]
            }
        },
        data: {
            labels: Labels,
            datasets: [
                {
                    data: ScoreData,
                    backgroundColor: "#51c4d3"
                }
            ]
        }
    })
}

var datta = [];
d3.csv("usavsindia.csv").then((data) => {
    datta = data.map(function (d) { return d });
    new Morris.Line({


        element: 'myfirstchart',


        data: datta,

        xkey: 'Year',

        ykeys: ['USA', 'India'],

        // chart.
        labels: ['usa', 'india'],
        smooth: false,
        resize: true,
        hideHover: true
    });

});

var pieChartValues = [{
    y: 28.16,
    exploded: true,
    indexLabel: "Hello",
    color: "#1f77b4"
  }, {
    y: 22.8,
    indexLabel: "Hi",
    color: "#ff7f0e"
  }, {
    y: 15.45,
    indexLabel: "pk",
    color: " #ffbb78"
  }, {
    y: 10.56,
    indexLabel: "one",
    color: "#d62728"
  }, {
    y: 7.38,
    indexLabel: "two",
    color: "#98df8a"
  }, {
    y: 6.73,
    indexLabel: "three",
    color: "#bcbd22"
  },{
    y: 5.73,
    indexLabel: "three",
    color: "#bcbd92"
  },{
    y: 4.73,
    indexLabel: "three",
    color: "#bcbd72"
  }, {
    y: 3.92,
    indexLabel: "four",
    color: "#f7b6d2"
  }]
d3.csv("World.csv").then((data)=>{
    pieChartValues.map((item,key)=>item.indexLabel=data[key].Name)
renderPieChart(pieChartValues);

function renderPieChart(values) {

  var chart = new CanvasJS.Chart("pieChart", {
    backgroundColor: "white",
    colorSet: "colorSet2",

  
    animationEnabled: true,
    data: [{
      indexLabelFontSize: 15,
      indexLabelFontFamily: "Monospace",
      indexLabelFontColor: "darkgrey",
      indexLabelLineColor: "darkgrey",
      indexLabelPlacement: "outside",
      type: "pie",
      showInLegend: false,
      toolTipContent: "<strong>#percent%</strong>",
      dataPoints: values
    }]
  });
  chart.render();
}});
