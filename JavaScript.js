function validar(){
    var formularioOk = true
    
    var rut = $("#rut").val()
    var Lrut = rut.lenght
    if (Lrut < 9 && Lrut > 10){
        formularioOk = false
        alert("El rut no está bien")
    }

    var appaterno = $("#appaterbi").val()
    var largoAppaterno = appaterno.lenght 
    if(largoAppaterno < 3 || largoAppaterno > 20){
        formularioOk = false
        alert("El apellido no esta bien escrito")
    }
    
    var edad = $("#edad").val()
    var valorEdad = parseInt(edad)
    if (valorEdad < 18||valorEdad >36){
        formularioOk = false
        alert("Edad fuera de rango escrielo bien por favor muchas gracias.")
    }

    if(formularioOk){
    escribirCarta()
    }
}

function escribirCarta(){
    var rut = $("#rut").val()
    var nombre = $("#nombre").val()
    var carta =  `Rut: ${rut} - Nombre ${nombre}`
    $("#carta").val(carta)
    $("#carta").show()
    $("#formulario").hide()
    $("btnValida").show()
}

function mostrar(){
    $("#formulario").show()
    $("#carta").hide()
    $("#btnValida").hide()
}