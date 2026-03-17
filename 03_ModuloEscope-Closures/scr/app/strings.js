"use strict";

export function toNonEmptyString(text ) {
    if (!text || text.trim().length ===0) {
        throw new TypeError("No puede esar vacio")
    }
    
    return text.trim()

}


export function titlecase(text) {
    let words = text.toLowerCase().split(" ");
    return words
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

}




export function slugify(text){
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g,"-");
}