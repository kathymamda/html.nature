
const buscador = document.getElementById("buscar");
const tarjetas = document.querySelectorAll(".tarjeta");
const filtros = document.querySelectorAll(".filtro");
const sinResultados = document.getElementById("sinResultados");

let categoriaActual = "todas";

function filtrarEspecies() {
    const texto = buscador.value.toLowerCase().trim();
    let visibles = 0;

    tarjetas.forEach(function(tarjeta) {
        const contenido = tarjeta.textContent.toLowerCase();
        const categoria = tarjeta.dataset.categoria;

        const coincideTexto = contenido.includes(texto);

        const coincideCategoria =
            categoriaActual === "todas" ||
            categoria === categoriaActual;

        if (coincideTexto && coincideCategoria) {
            tarjeta.style.display = "";
            visibles++;
        } else {
            tarjeta.style.display = "none";
        }
    });

    sinResultados.style.display =
        visibles === 0 ? "block" : "none";
}

buscador.addEventListener("input", filtrarEspecies);

filtros.forEach(function(boton) {
    boton.addEventListener("click", function() {
        filtros.forEach(function(filtro) {
            filtro.classList.remove("activo");
        });

        boton.classList.add("activo");
        categoriaActual = boton.dataset.filtro;

        filtrarEspecies();
    });
});
