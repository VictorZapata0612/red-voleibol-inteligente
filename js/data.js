document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json", { cache: "no-cache" }) // Evita problemas de caché
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("data-container");
            container.innerHTML = "";
            if (!Array.isArray(data) || data.length === 0) {
                container.textContent = "No hay datos disponibles";
                return;
            }

            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("data-item");
                
                // Clasificar impacto según el valor del sensor
                let impacto = "";
                let claseCSS = "";
                
                if (item.valor >= 7) {
                    impacto = "🔥 Muy duro";
                    claseCSS = "muy-duro";
                } else if (item.valor >= 3) {
                    impacto = "⚠️ Leve";
                    claseCSS = "leve";
                } else {
                    impacto = "✅ Muy leve";
                    claseCSS = "muy-leve";
                }

                // Agregar clase CSS y contenido al div
                div.classList.add(claseCSS);
                div.innerHTML = `<strong>${item.sensor}:</strong> ${item.valor} ${item.unidad} - ${impacto}`;
                container.appendChild(div);
            });
        })
        .catch(error => {
            document.getElementById("data-container").textContent = "Error al cargar los datos";
            console.error("Error al cargar Data.json:", error);
        });
});
