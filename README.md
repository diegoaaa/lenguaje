# Lenguaje

Este lenguaje es Inventado a partir
 de mi [Curso de Fundamentos de Javascript](https://platzi.com/js) 
 donde he aprendido gracias a [Platzi](https://platzi.com)

## Descripción del idioma

- Si la palabra termina en "ar" se quitan esos dos últimos caractéres ej quitar = quit

- Si la Palabra termina con "z" se agregará "PE" al final ej Zorro = zorrope

- Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión

- Si la Palabra Original es Palíndroma ninguna regla anterior cuenta y se devuelve la Misma Palabra, intercalando Mayúsculas y Minúsculas

## Instalación

```

npm install lenguaje
```
## Uso

```
import lenguaje from 'lenguaje'

lenguaje("Programar") //program
lenguaje("Zorro") //Zorope
lenguaje("Zarpar") //Zarppe
lenguaje("abecedario") //abece-dario
lenguaje("sometemos") //SoMeTeMoS
``` 

## Créditos
-[Diego Ahumada](https://twitter.com/@diegopikes)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
