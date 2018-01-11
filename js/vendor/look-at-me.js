+function () {
    // Elementos
    document.getElementById("agregar");
    document.getElementById("mostar");
    document.getElementById("buscar");
    document.getElementById("top-tecnico");
    document.getElementById("top-hse");



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
