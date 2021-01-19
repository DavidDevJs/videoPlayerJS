console.log('Hello TypeScript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(4, 6);

//Tipos Basicos

//Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 46;
let denominador: number = 6;
let resultado = numerador / denominador;

//String

let nombre: string = 'David';
let saludo = `Me llamo ${nombre}`;

//Arrays

let people: string[] = [];
people = ["Lorena", "David", "Danna"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Blanca", "Raul");
peopleAndNumbers.push(5001);

//Enum: conjunto de valores predefinido

enum Color{
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let favoriteColor: Color = Color.Rojo
console.log(`Mi color favorito es ${favoriteColor}`)

//Any
let comodin: any = 'Joker';
comodin = { type: 'Woldcard'}; //Sin : any la reasignación seria un error

//Object
let someObject: object = {
  key: 'value',
}
