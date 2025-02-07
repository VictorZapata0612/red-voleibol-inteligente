document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = '';

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'data-card';
                card.innerHTML = `
                    <h3>🎯 Sensor: ${item.sensor}</h3>
                    <p><strong>Impacto:</strong> ${item.impacto}</p>
                    <p><strong>Vibración:</strong> ${item.vibracion}</p>
                    <p><strong>Fecha:</strong> ${item.fecha}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            document.getElementById('data-container').innerHTML = 'No se pudieron cargar los datos.';
        });
});
