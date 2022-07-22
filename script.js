let acum = 0
let P
let Sueldo

do {    
    P = parseInt(prompt("ingrese la cantidad de personas que trabajan"))
} while (isNaN(P) )
for (let i = 0; i < P;  i++) {
    do {
        Sueldo = parseFloat(prompt("ingrese un sueldo"))
    } while (isNaN(Sueldo))
    
    acum += Sueldo 
} 
console.log(`El total de los sueldos es ${acum}`)