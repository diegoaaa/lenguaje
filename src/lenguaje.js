export default function lenguaje(str){//también se puede usar str para representar un String
  let traducir = str
  // Si la palabra termina en ar se quitan esos dos últimos caractéres
  if(str.toLowerCase().endsWith('ar')){//endsWith es una función que permite preguntar si la palagra termina en una palabra específica
    traducir = str.slice(0,-2)//Slice permite cortarle a una palabra una cantidad de caracteres el primer valor, define de donde empezar y el segundo valor dice cuantas letras o caracteres cortar al final
  }
  // Si la Palabra termina con Z se agregará "PE" al final
  if (str.toLowerCase().startsWith('z')){//La misma fución que endsWith, pero buscando desde el inicio de la palabra
    traducir += 'pe' // otra forma de escribirlo sería traducir = traducir + 'pe'
  }
  //Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión
  const length = traducir.length
  if(length >= 10){
    const firstHalf = traducir.slice (0, Math.round(length / 2))
    const secondHalf = traducir.slice (Math.round(length / 2))
    traducir = `${firstHalf}-${secondHalf}`
  }
  //Si la Palabra Original es Palíndroma ninguna regla anterior cuenta y se devuelve la Misma Palabra, intercalando Mayúsculas y Minúsculas
  const reverse = (str) => str.split('').reverse().join('')
  //Split en '' divide cada caracter en un arreglo, ejemplo dia ["d","i","a"] si se pone un separador diferente ejemploo , y son varias palabras, pondrá en el arreglo ocada palabra por separado
  //Reverse invierte los valores del arreglo entonces ["d","i","a"] quedaría ["a","i","d"]
  //Join '' lo que hace es juntar nuevamente quitando el arreglo y conformando una palabra completa nuevamente entondes dia - aid
  function minMay(str){
    const length = str.length
    let traducir = '' // se define, ya que tenemos que usar una nueva variable, no puede ser la que estábamos usando, ya que se sumarán caracteres en mayuscula y minuscula
    let capitalize = true // Capitalize sifnifica poner en Mayuscula y lo definimos como Booleano para que busque si el valor es true hay que concatenar a la traduccón del caracter
    for (let i = 0; i < length; i++ ){//i es un índice que se usará dentro de la repetición de l ciclo for y cada vez que se ejecute irá subiendo
      const char = str.charAt(i)
      traducir += capitalize ? char.toUpperCase() : char.toLowerCase()
      // La condición traduce el if timando ? como en que estado esta capitalize, guego la acción y : es el else
      capitalize = !capitalize
      //esta traduce la condición contraria para intercalar
    }
    return traducir

    }
  if (str == reverse(str)){
    return minMay(str)
  }// la condición entonces valida si str es igual a str invertido
  return traducir
}