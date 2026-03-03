// // formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80


//Maps
//ejemplo 1:agregar iva
const precios = [100, 200, 300];

const preciosConIVA = precios.map(precio => precio * 1.16);
// [116, 232, 348]
console.log(preciosConIVA);


//ejemplo 2: Convertir precios a dólares con IVA
const precios1 = [10, 20, 30];
const conIVA = precios1.map(p => p * 1.16);
// [11.6, 23.2, 34.8]
console.log(conIVA)

//ejemplo 3:Obtener solo nombres
const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 }
];

const nombres = usuarios.map(u => u.nombre);
// ["Ana", "Luis"]
console.log(nombres)


// ejemplo 4: Convertir strings a mayúsculas
const palabras = ["hola" , "mundo "];
const mayus= palabras.map (p=> p.toUpperCase());
//[HOLA, MUNDO ]
console.log(mayus)


// ejemplo 5: Formatear productos
const productos=["computador", "mouse"];
const lista= productos.map (p => `producto: ${p}`);
// ["Producto: Laptop", "Producto: Mouse"]
console.log(lista)



//Filter

//ejemplo 1: Numeros pares

const numeros1 = [1,2,3,4,5,6];
const pares = numeros1.filter(n => n % 2 === 0);
// [2,4,6]

console.log(pares)


//ejemplo 2: Mayores de edad
const edades = [15, 22, 17, 30];
const mayores = edades.filter(e => e >= 18);
// [22, 30]

console.log(mayores)


//ejemplo 3: Productos baratos
const precios2 = [5000, 100000, 50000, 10000];
const baratos = precios2.filter(p => p < 60000);
// [5000, 50000, 10000]

console.log(baratos)


//ejemplo 4: Ususarios activos
const usuarios1 = [
  { nombre: "Ana", activo: true },
  { nombre: "Luis", activo: false },
  { nombre: "Julan", activo: true },
  { nombre: "Maria", activo: false }
];

const activos = usuarios1.filter(u => u.activo);
// [{ nombre: "Ana", activo: true }] 
// { nombre: "Julan", activo: true }

console.log(activos)


//ejemplo 5: palabras largas
const palabras1 = ["sol", "javascript", "web", "jueves", "computador"];
const largas = palabras1.filter(p => p.length > 5);
// ["javascript" ,"jueves", "computador" ]

console.log (largas)


//reduce
//ejemplo 1:Sumar numeros
const numeros2 = [1,2,3,4];
const suma = numeros2.reduce((total, n) => total + n, 0);
// 10

console.log(suma)


//ejemplo 2: Multiplicar
const numeros3 = [2,3,4];
const producto = numeros3.reduce((acc, n) => acc * n, 1);
// 24

console.log(producto)


//ejemplo 3:contar elementos
const frutas = ["manzana", "pera", "manzana"];
const conteo = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
// { manzana: 2, pera: 1 }

console.log(conteo)


// ejemplo 4:Suma del precio del carrito

const carrito = [
  { producto: "Laptop", precio: 1000 },
  { producto: "Mouse", precio: 50 }
];

const total = carrito.reduce((acc, item) => acc + item.precio, 0);
// 1050

console.log(total)


//ejemplo 5:Calcular promedio

const notas = [80, 90, 70, 100];

const promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

console.log(promedio);
// 85

