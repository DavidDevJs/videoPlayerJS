//functions

function add(a:number, b:number):number {
  return a + b;
}

const sum1 = add(6, 4);

//return function()

function createAdder(a:number): (number) => number{
  return function(b:number){
    return b + a; 
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//Parametros Opcionales
                                // = permite asignar valores por defecto
function fullName(firtsName:string = 'Pepito', lastName?:string):string { //al agregar el ? en el argumento declara que es opcional
  return `${firtsName} ${lastName}`
}

const david = fullName('David', 'Gonzalez');
const lorena = fullName('lorena');
