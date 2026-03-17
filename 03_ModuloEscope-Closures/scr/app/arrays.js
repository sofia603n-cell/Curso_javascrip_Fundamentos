"use strict";

export function sumArray(arr){
    return arr.reduce((acc, n) => acc + n,0) ;
}

export function averageArray(arr){
    return sumArray(arr) / arr.length;
}


export function grupArrayby(arr, prop) {
    return arr.reduce((grupos,item)=> {
        const clave=item[prop];
        (grupos[clave]=grupos[clave]||[]).push(item);
        return grupos;
    })

}
