let acum = 0
let P
let Sueldo
let prome
let opc
function ftotal (){
    acum = 0
    do {    
        P = parseInt(prompt("ingrese la cantidad de personas que trabajan"))
    } while (isNaN(P) )
    for (let i = 0; i < P;  i++) {
        do {
            Sueldo = parseFloat(prompt("ingrese un sueldo"))
        } while (isNaN(Sueldo))
        
        acum += Sueldo 
    } 
}

function fprome (){
    acum = 0
    ftotal ()
    prome = acum / P
}

do {
    do {
        opc = parseFloat(prompt(`ingrese una opcion, 1.Total de sueldos, o 2.Promedio de sueldos`))
    } while((isNaN(opc) ) || opc < 1 || opc > 2)
    switch(opc) {
        case 1: 
            ftotal()
            console.log(`El total de los sueldos es ${acum}`)
            break
        case 2: 
            fprome()
            console.log(`El promedio de los sueldos es ${prome}`)
    }
    resp = prompt("¿Desea seguir operando?").toLowerCase()

} while (resp != "no")
