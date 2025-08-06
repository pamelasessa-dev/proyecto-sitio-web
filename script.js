document.addEventListener("DOMContentLoaded", () => {
    const boton = document.createElement("button");
    boton.textContent = "Ocultar imagen";
    document.body.appendChild(boton);

    boton.addEventListener("click", () => {
        const imagen = document.querySelector(".image");
        if (imagen) imagen.style.display = "none";
    });
});