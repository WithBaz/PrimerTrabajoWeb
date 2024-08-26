var linkEstudiantes = document.getElementById("linkEstudiantes");
var contenedorEstudiantes = document.getElementById("contenedorEstudiantes");
var linkAsignaturas = document.getElementById("linkAsignaturas");
var contenedorAsignaturas = document.getElementById("contenedorAsignaturas");

linkEstudiantes.addEventListener("click", function(event) {
    event.preventDefault();
    contenedorEstudiantes.classList.add("active");
    contenedorAsignaturas.classList.remove("active");
});

linkAsignaturas.addEventListener("click", function(event) {
    event.preventDefault();
    contenedorAsignaturas.classList.add("active");
    contenedorEstudiantes.classList.remove("active");
});
