+function () {
    // Elementos
    var addBoton = document.getElementById("agregar");
    var showBoton = document.getElementById("mostrar");
    var searchBoton = document.getElementById("buscar");
    var topTechBoton = document.getElementById("top-tecnico");
    var topHSEBoton = document.getElementById("top-hse");
    var result = document.getElementById("contenedor-estudiantes");



    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students);
    };

    

    // Manejadores de eventos
    document.addEventListener("click", addEvent);
    document.addEventListener("click",showEvent);
    
}();
