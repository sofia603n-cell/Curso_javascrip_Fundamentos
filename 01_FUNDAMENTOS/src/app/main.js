"use strict";

const temperatura = ["c", "f", "k", "kelvin", "celsius", "fahrenheit"];
const longitud = ["m", "km", "cm", "metros", "kilometros", "centimetros"];


//  Función convertir
function convertir(value, from, to) {

    from = from.toLowerCase();
    to = to.toLowerCase();

    let valor = Number(value);
    let resultado;

    if (!Number.isFinite(valor)) {
        return "Error: valor inválido, escribir en numeros";
    }

    if (![...temperatura, ...longitud].includes(from) ||
        ![...temperatura, ...longitud].includes(to)) {
        return "Error: unidad no soportada";
    }

    const esTemp = temperatura.includes(from) && temperatura.includes(to);
    const esLong = longitud.includes(from) && longitud.includes(to);

    if (!esTemp && !esLong) {
        return "Error: categorías diferentes";
    }

    // 🔥 TEMPERATURA
    if (esTemp) {

        if (from === "kelvin") from = "k";
        if (from === "celsius") from = "c";
        if (from === "fahrenheit") from = "f";

        if (to === "kelvin") to = "k";
        if (to === "celsius") to = "c";
        if (to === "fahrenheit") to = "f";

        if (from === "c" && to === "f") {
            resultado = (valor * 9/5) + 32;
        } else if (from === "f" && to === "c") {
            resultado = (valor - 32) * 5/9;
        } else if (from === "c" && to === "k") {
            resultado = valor + 273.15;
        } else if (from === "k" && to === "c") {
            resultado = valor - 273.15;
        } else {
            resultado = valor;
        }
    }

    // 🔥 LONGITUD
    if (esLong) {

        if (from === "metros") from = "m";
        if (from === "kilometros") from = "km";
        if (from === "centimetros") from = "cm";

        if (to === "metros") to = "m";
        if (to === "kilometros") to = "km";
        if (to === "centimetros") to = "cm";

        let metros;

        if (from === "m") metros = valor;
        if (from === "km") metros = valor * 1000;
        if (from === "cm") metros = valor / 100;

        if (to === "m") resultado = metros;
        if (to === "km") resultado = metros / 1000;
        if (to === "cm") resultado = metros * 100;
    }

    return resultado.toFixed(2) + " " + to;
}

// 📋 Lista de pruebas
const pruebas = [
    { value: "treinta", from: "celsius", to: "f" },
    { value: 32, from: "f", to: "c" },
    { value: 0, from: "c", to: "f" },
    { value: -40, from: "c", to: "f" },
    { value: 1500, from: "m", to: "km" },
    { value: 1.2, from: "km", to: "m" },
    { value: "abc", from: "c", to: "f" },
    { value: 10, from: "kg", to: "g" },
    { value: 10, from: "c", to: "m" },
    { value: "", from: "m", to: "km" }
];

// 🔥 Ejecutar todas las pruebas
const resultados = pruebas.map(prueba => {
    return {
        Entrada: `${prueba.value} ${prueba.from} → ${prueba.to}`,
        Resultado: convertir(prueba.value, prueba.from, prueba.to)
    };
});

// 📊 Mostrar tabla
console.table(resultados);