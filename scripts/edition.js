let isEditing = false;

function toggleEdit() {
    const editButton = document.querySelector('.action-button:last-child span');
    const editableElements = document.querySelectorAll('.editable');

    if (!isEditing) {
        // Habilitar edición solo para elementos que no tengan id="visualizaciones" o id="propietario"
        editableElements.forEach(element => {
            if (element.id !== 'visualizaciones' && element.id !== 'propietario') {
                element.setAttribute('contenteditable', 'true');
                element.style.border = "1px dashed #ffffff"; // Indicador visual opcional
            }
        });
        editButton.textContent = 'Guardar';
    } else {
        // Deshabilitar edición y guardar cambios
        editableElements.forEach(element => {
            element.setAttribute('contenteditable', 'false');
            element.style.border = "none"; // Quitar el indicador visual
        });
        editButton.textContent = 'Editar';
    }
    isEditing = !isEditing;
}

let conversaciones = {
    "Cliente 1": ["José: ¿Cuál es el precio de la casa?"],
    "Cliente 2": ["María: ¿Dónde está ubicada?"],
    "Cliente 3": ["Sara: Me gustaría más información."]
};

function mostrarConversacion(cliente) {
    const mensajesDiv = document.getElementById("mensajes");
    const nombreCliente = document.getElementById("nombre-cliente");
    mensajesDiv.innerHTML = ""; // Limpiar mensajes anteriores
    nombreCliente.textContent = cliente;
    
    // Mostrar mensajes existentes
    conversaciones[cliente].forEach(mensaje => {
        const p = document.createElement("p");
        p.textContent = mensaje;
        mensajesDiv.appendChild(p);
    });
}

function enviarMensaje() {
    const mensajeInput = document.getElementById("mensaje");
    const mensaje = mensajeInput.value;
    const nombreCliente = document.getElementById("nombre-cliente").textContent;

    if (mensaje && nombreCliente !== "Selecciona un cliente") {
        const mensajesDiv = document.getElementById("mensajes");

        // Agregar el mensaje al área de conversación
        const p = document.createElement("p");
        p.textContent = "Tú: " + mensaje;
        mensajesDiv.appendChild(p);

        // Guardar el mensaje en la conversación
        conversaciones[nombreCliente].push("Tú: " + mensaje);

        // Limpiar el input
        mensajeInput.value = "";
    } else {
        alert("Selecciona un cliente e ingresa un mensaje.");
    }
}
