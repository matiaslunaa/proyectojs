let formulario = "Registro de formulario: "

let respuesta = ""

do{

    let nombre = prompt("¿Cuál es su nombre?")
    let apellido = prompt("¿Cuál es su apellido?") 
    let zona = prompt("¿En qué ciudad vive?")   
    let edad = Number(prompt("¿Qué edad tiene?"))

    formulario = formulario + "Nombre: "+ nombre + " Apellido: "+ apellido + "Zona: " + zona + "Edad: "+ edad

    respuesta = prompt("¿Querés seguir guardando datos? Si ya desea terminar escriba 'SALIR'").toUpperCase()
}while(respuesta != "SALIR")

alert(formulario)