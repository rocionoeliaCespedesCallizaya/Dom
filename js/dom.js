// Ejemplo 1: Selección y evento click
        const mensaje = document.getElementById('mensaje');
        const btnCambiar = document.getElementById('btnCambiar');

        btnCambiar.addEventListener('click', () => {
            mensaje.textContent = '¡Hola! El texto ha sido modificado mediante el DOM.';
        });

        // Ejemplo 2: Captura de propiedad value
        const nombreInput = document.getElementById('nombreInput');
        const btnSaludar = document.getElementById('btnSaludar');
        const resultado = document.getElementById('resultado');

        btnSaludar.addEventListener('click', () => {
            const valor = nombreInput.value;
            resultado.textContent = `¡Bienvenido/a, ${valor}!`;
        });