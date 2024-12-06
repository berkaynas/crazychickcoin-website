document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Burned', 'Circulating'],
            datasets: [{
                label: 'Tokenomics',
                data: [100, 900],
                backgroundColor: ['#ff5722', '#ffcc00'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
