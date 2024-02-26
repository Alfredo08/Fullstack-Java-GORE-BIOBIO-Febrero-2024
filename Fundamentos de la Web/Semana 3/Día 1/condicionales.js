/*
    Jerarquía de operadores
    1) ()
  1.5) !
    2) * / %
    3) + -
    4) > >= < >= === !==
    5) && ||
    6) =
*/

let edad = 18;
let tieneLicencia = true;

if(edad >= 18 && tieneLicencia === true){
    console.log("Tu ya puedes manejar legalmente!");
}
else{
    console.log("Aún no deberías de manejar");
}

let num1 = 25;
let num2 = 12;
let num3 = 20;

if(num1 >= num2){
    // Deciframos que el num1 es mayor al num2
    if(num1 >= num3){
        // Deciframos que num1 es el mayor de los tres
        if(num2 >= num3){
            // Deciframos que num1 > num2 y num3 y num2 > num3
            console.log(num1, num2, num3);
        }
        else{
            console.log(num1, num3, num2);
        }
    }
}