var dni = 0
var longitud = 8
var divisor = 23

var letras = [
    'T', 'R', 'W', 'A',
    'G', 'M', 'Y', 'F',
    'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S',
    'Q', 'V', 'H', 'L',
    'C', 'K', 'E'
]

function calcular(dni) {
    var aux = dni % divisor
    console.log(letras[aux])
}

function comprobar(numero) {
    if (typeof numero == "number") {
        if (numero.toString().length > longitud) {
            if (numero > 0) {
                if (numero.toString().length < longitud) {
                    for (var i = 0; i = longitud - numero.toString().length; i++)
                        numero = '0' + numero
                    calcular(numero)
                } else
                    calcular(numero)
            } else
                alert("Introduce un valor posibvo")
        } else
            alert("Introduce un número de 8 cifras ")
    } else
        alert("Introduce un valor numérico ")
}