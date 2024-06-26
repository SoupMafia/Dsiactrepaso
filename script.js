function calcularImpuestos() {
    const precioUSD = parseFloat(document.getElementById('precio').value);
    const plataforma = document.getElementById('plataforma').value;
    let precioFinal;

    switch (plataforma) {
        case 'steam':
        case 'googleplay':
        case 'roblox':
            // Conversión a pesos argentinos (ARS)
            precioFinal = precioUSD * 1350;
            break;
        case 'xbox':
        case 'microsoft':
            // Ya está en pesos argentinos (ARS)
            precioFinal = precioUSD;
            break;
        default:
            alert('Seleccione una plataforma válida');
            return;
    }

    // Aplicar impuestos (60%)
    precioFinal *= 1.6;

    // Mostrar resultado
    mostrarResultado(precioFinal);
}

function mostrarResultado(precioFinal) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>El precio final con impuestos es: ${precioFinal.toFixed(2)} pesos argentinos</p>
    `;
}
