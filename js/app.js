var students = [];

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    return students;
}

function studentAdd() {

    var studentName = prompt("Enter student name");
    var techPoints = parseInt(prompt("Enter tech points"));
    var hsePoints = parseInt(prompt("Enter HSE points"));

    var student = {
        "name": studentName,
        "tech points": techPoints,
        "hse points": hsePoints,
    }

    students.push(student);

    return student;
  

    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var studentName = 
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
   
}

function show(student) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var result = "";
    result += "<div class='row'>";
    result += "<div class='col m12'>";
    result += "<div class='card blue-grey darken-1'>";
    result += "<div class='card-content white-text'>";
    result += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    result += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    result += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    return result;
}

function listShow(students) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes

}

function search(studentName, students) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
