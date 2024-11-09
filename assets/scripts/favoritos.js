document.addEventListener("DOMContentLoaded", function () {
    const listaFavoritos = document.getElementById("lista-favoritos");
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Verifica si hay favoritos
    if (favoritos.length > 0) {
        favoritos.forEach((propiedad, index) => {
            const divPropiedad = document.createElement("div");
            divPropiedad.className = "lugar";

            // Inserta la información de la propiedad
            divPropiedad.innerHTML = `
                <div class="imagen-propiedad1"></div>
                <div class="info-propiedad">
                    <div class="parrafo">
                        <p>${propiedad.precio}</p>
                        <p>${propiedad.dormitorios}</p>
                        <p>${propiedad.ubicacion}</p>
                    </div>
                    <div class="buttons">
                        <button class="add">Ver más detalles</button>
                        <button class="erase" data-index="${index}">Eliminar de favoritos</button>
                    </div>
                </div>
            `;
            listaFavoritos.appendChild(divPropiedad);
        });
    } else {
        listaFavoritos.innerHTML = "<p>No tienes propiedades en favoritos.</p>";
    }

    // Eliminar una propiedad de favoritos
    listaFavoritos.addEventListener("click", function (event) {
        if (event.target.classList.contains("erase")) {
            const index = event.target.getAttribute("data-index");
            
            // Elimina el favorito de la lista
            favoritos.splice(index, 1);

            // Actualiza el almacenamiento local
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

            // Recarga la página para reflejar los cambios
            location.reload();
        }
    });
});