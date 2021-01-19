//Interfaces
enum Color{
  Rojo = 'Rojo',
  verde = 'Verde'
}

interface Rectangulo{
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho:4,
  alto: 6,
  //color: Color.verde,
}

function area(r: Rectangulo):number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(`El Area del rectangulo es: ${areaRect}`);

rect.toString = function() {
  return (this.color) ? `Un rectangulo ${this.color}` : `Un rectangulo sin color`
}

console.log(rect.toString())
