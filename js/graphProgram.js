var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
        labels: ["Optimistic", "Stressed", "Neutral", "Sad", "Nutty"],
        datasets: [
            {
                label: "Frequency of Feel",
                backgroundColor:[ "rgb(255,215,0)", "rgb(255,69,0)", "rgb(220,220,220)", "rgb(0,0,205)",
                    "rgb(205,133,63)"],
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20]
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive:false,
        maintainAspectRatio: false
    }
});
new Chart(ctx).Bar(chart);