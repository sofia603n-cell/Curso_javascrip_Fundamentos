"use strict";
 
export function clamp(value, min, max) {
    if (!Number.isFinite(value ) ||
    !Number.isFinite(min) ||
    !Number.isFinite(max)){
        throw new TypeError("Todos los numeros deben ser finitos")
    }

    if(min > max){
        return Math.min(Math.max(value, max), min);
    }
}


//redondear digitos decimales

export function roundTo(value, decimals) {
    if (!Number.isFinite(value) || !Number.isFinite(decimals)){
        throw new TypeError("Todos los argumentos dben ser finitos");
    }

    if (decimals < 0) {
        throw new Error ("los decimales deben ser numero negatico")
    }

    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decumals);
}



//funcion que retorna un numeo aleatorio entre min y max

export function random(min, max)  {
    if(!Number.isFinite(min) || !Number.isFinite(max)){
        throw new console.Error("El minimo debe ser menor o igual al maximo");
        
    }

    return Math.random()*(max - min)+ min;
}