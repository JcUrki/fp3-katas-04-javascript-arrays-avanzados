/*--- Ejercicio 1 ---*/
function capitalize(array){
    /*
        1- Va al index que se pide
        2- Aplica mayúscula al 1er carácter 
        3- Devuelve un nuevo array con los cambios y en orden de ingreso. El slice indica donde comienza, y si tuviera 2 valores ("1,2") el segundo es donde termina
    */
    return array.charAt(0).toUpperCase().concat(array.slice(1))
}

export function capitalizeArrays(array){
    return array.map(capitalize)
}

/*--- Ejercicio 2 ---*/
export function calcFinalGrade(students){
    return students.map(e => ({
        name: e.name,
        final_grade: 0.4*((e.firstProject + e.secondProject)/2)+(0.6*e.finalExam)}
    ))
}

/*--- Ejercicio 3 ---*/
export function calcAverageCalories(menu){
    /*
        Argumentos
        1- Acumulador/total es indefinido y comienza por defecto con el primer elemento de un array, pero este cambia cuando hay otro parámetro = callback, valor inicial (que sería el ", 0"). 
        2- Elemento/ valor actual toma el valor siguiente del inicial
        3&4- Index del elemento actual y el array que están siendo reducido
    */

   return menu.reduce((acc, e, i, a)=>
        acc += e.calories/a.length, 0)
}

/*--- Ejercicio 4 ---*/
export function calcAverageRate(product){
    return product.reviews.reduce((acc, e, i, a)=>
    acc += e.rate/a.length, 0)
}

let product = {
    name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
    price: 15.69,
    manufacturer: "JIM'S STORE",
    reviews:
    [
      {  user: "Pavel Nedved",
        comments: "Muy contento",
        rate: 4
      },
      {  user: "Alvaro Trezeguet",
        comments: "No tiene carga rápida",
        rate: 1
      },
      {  user: "David Recoba",
        comments: "Excelente relación calidad/precio.",
        rate: 5
      },
      {  user: "Maribel Romero",
        comments: "Pocas prestaciones",
        rate: 2
      },
      {  user: "Antonio Cano",
        comments: "Materiales malos",
        rate: 1
      },
    ]
}