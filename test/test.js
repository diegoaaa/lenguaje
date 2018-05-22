
const expect = require('chai').expect
const lenguaje = require('..').default

describe('#lenguaje', function(){
	it('Si la palabra termina en "ar" se quitan esos dos últimos caractéres ej quitar = quit', function() {
		const traducir = lenguaje("Programar")
		expect(traducir).to.equal("Program")
	})
	it('Si la Palabra termina con "z" se agregará "PE" al final ej Zorro = zorrope', function() {
		const traducir = lenguaje("Zorro")
		const traducir2 = lenguaje("Zarpar")
		expect(traducir).to.equal("Zorrope")
		expect(traducir2).to.equal("Zarppe")

	})
	it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión', function() {
		const traducir = lenguaje("abecedario")
		expect(traducir).to.equal("abece-dario")
	})
	it('Si la Palabra Original es Palíndroma ninguna regla anterior cuenta y se devuelve la Misma Palabra, intercalando Mayúsculas y Minúsculas', function() {
		const traducir = lenguaje("sometemos")
		expect(traducir).to.equal("SoMeTeMoS")
	})
}) 