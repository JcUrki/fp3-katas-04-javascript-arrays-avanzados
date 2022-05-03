

function capitalize(text){
    return text.charAt(0).toUpperCase().concat(text.slice(1))
}
export function capitalizeArrays(array){
    return array.map(capitalize)
}

export function calcFinalGrade(studentsArray){
    return studentsArray.map(e => ({
        name:e.name,
        final_grade: 0.4*((e.firstProject + e.secondProject)/2)+(0.6*e.finalExam)}
        ))
}

export function calcAverageCalories(menu){
    return menu.reduce((ac, e,i,a)=>
        ac +=e.calories/a.length,0)
}

export function calcAverageRate(product){
    return menu.reduce((ac, e,i,a)=>
    ac +=product.reviews.rate/a.length,0)
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

  console.log(calcAverageRate(product));
