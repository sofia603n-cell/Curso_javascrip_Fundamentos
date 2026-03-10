"use strict";

// Funciones setup + validaciones base

function toNumberString(value, label = "Valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`${label} debe ser un número válido`);
  }
  return n;
}

function assertNonNegative(value, label = "Valor") {
  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }
}

function toNonEmptyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
  }
  return s;
}

// paso  Dataset de ejemplo + normalizacion

function normalizeExpense(raw) {
  const id = toNonEmptyString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "Fecha");
  const categoria = toNonEmptyString(raw.categoria, "Categoría");
  const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
  const monto = toNumberString(raw.monto, "Monto");

  assertNonNegative(monto, "Monto");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}

const expenses = [
  normalizeExpense({
    id: "e1",
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 8500000,
  }),
  normalizeExpense({
    id: "e2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),
  normalizeExpense({
    id: "e3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),
  normalizeExpense({
    id: "e4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 2000000,
  }),
  normalizeExpense({
    id: "e5",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso en línea",
    monto: 1200000,
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Alimentacion",
    monto: 1200000,
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-02-05",
    categoria: "Salud",
    descripcion: "medicamentos",
    monto: 1200000,
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-02-05",
    categoria: "Entretenimiento",
    descripcion: "Parque de diversiones",
    monto: 1200000,
  }),
    normalizeExpense({
    id: "e7",
    fecha: "2025-02-05",
    categoria: "Entretenimiento",
    descripcion: "cine",
    monto: 1240000,
  }),
];

// paso 3 estadisticas básicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto);
  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// totales por categoria

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;
    return acc;
  }, {});
}

// Reporte en consola

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses);

  console.group("REPORTE - ANALIZADOR DE GASTOS");

  console.log("Resumen:");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);
  

  console.log("Totales por categoría:");
  console.table(
    Object.entries(byCat).map(([categoria, total]) => ({
      Categoria: categoria,
      Total: formatCOP(total),
    }))
  );

  console.groupEnd();
}

// Gastos mas altos

const stast = calStats(expenses);
const gastoMasAlto=expenses.find((e) => e.monto === stast.maximo);
console.log("Gasto más alto:");
console.table({
    fecha: gastoMasAlto.fecha,
    categoria: gastoMasAlto.categoria,
    descripcion: gastoMasAlto.descripcion,
    monto: formatCOP(gastoMasAlto.monto),
});

//Detalles de la ultima compra

console.log("Detalles de la última compra:");
const ultimagasto= [...expenses].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];
console.table({
    fecha: ultimagasto.fecha,
    categoria: ultimagasto.categoria,
    descripcion: ultimagasto.descripcion,
    monto: formatCOP(ultimagasto.monto),
});
 console.table(ultimagasto);


// obtener totales por categoria
const byCat = totalByCategory(expenses);

console.log("Totales por categoría ordenados:");

console.table(
  Object.entries(byCat)
    .sort((a, b) => a[0].localeCompare(b[0])) // ordena por nombre de categoría
    .map(([categoria, total]) => ({
      Categoria: categoria,
      Total: formatCOP(total),
    }))
);

printReport(expenses);
