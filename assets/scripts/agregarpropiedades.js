// Función para eliminar la propiedad
function eliminarPropiedad(event) {
    const propiedad = event.target.closest('.lugar'); // Encuentra el contenedor más cercano con la clase "lugar"
    propiedad.remove(); // Elimina el contenedor de la propiedad
}

// Abre el modal
function abrirModal() {
    document.getElementById('modalAgregar').style.display = 'flex';
}

// Cierra el modal
function cerrarModal() {
    document.getElementById('modalAgregar').style.display = 'none';
}

// Función para agregar la nueva propiedad
function agregarPropiedad(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página

    // Obtener valores del formulario
    const ubicacion = document.getElementById('ubicacion').value;
    const precio = document.getElementById('precio').value;
    const dormitorios = document.getElementById('dormitorios').value;
    const imagenInput = document.getElementById('imagen');
    const imagenURL = URL.createObjectURL(imagenInput.files[0]);

    // Crear el contenedor de la nueva propiedad
    const nuevaPropiedad = document.createElement('div');
    nuevaPropiedad.classList.add('lugar');

    // Añadir el contenido de la nueva propiedad sin <img>
    nuevaPropiedad.innerHTML = `
        <div class="imagen-propiedad1"></div>
        <div class="info-propiedad">
            <div class="parrafo">
                <p>Precio: ${precio}</p>
                <p>Dormitorios: ${dormitorios}</p>
                <p>Ubicación: ${ubicacion}</p>
            </div>
            <div class="buttons">
                <button class="add">Editar</button>
                <button class="erase">Eliminar</button>
            </div>
        </div>
    `;

    // Establece la imagen de fondo en el contenedor de la imagen
    nuevaPropiedad.querySelector('.imagen-propiedad1').style.backgroundImage = `url(${imagenURL})`;

    // Agregar la nueva propiedad al contenedor de lista de propiedades
    document.querySelector('.lista').appendChild(nuevaPropiedad);

    // Añade el evento de eliminar al nuevo botón "Eliminar"
    nuevaPropiedad.querySelector('.erase').addEventListener('click', eliminarPropiedad);

    // Cierra el modal y limpia el formulario
    cerrarModal();
    document.querySelector('form').reset();
}

// Añade el evento de eliminar a los botones de las propiedades existentes al cargar la página
document.querySelectorAll('.erase').forEach(button => {
    button.addEventListener('click', eliminarPropiedad);
});
