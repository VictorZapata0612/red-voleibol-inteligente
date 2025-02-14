document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("dataChart").getContext("2d");

    const dataChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Velocidad (m/s)",
                data: [7.8, 6.5, 8.2, 7.1, 6.9],
                borderColor: "#0077cc",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Simulación de nuevos datos
    setInterval(() => {
        let newValue = (Math.random() * (9 - 6) + 6).toFixed(2);
        dataChart.data.labels.push(dataChart.data.labels.length + 1);
        dataChart.data.datasets[0].data.push(newValue);

        if (dataChart.data.labels.length > 10) {
            dataChart.data.labels.shift();
            dataChart.data.datasets[0].data.shift();
        }

        dataChart.update();
    }, 3000);
});
