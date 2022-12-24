"use strict";
// -----1 ways ---------//
// const getIdentity = (
//   arg: number | string | boolean
// ): number | string | boolean => {
//   return arg;
// };
// let a: string = "Hello";
// let b: number = 1;
// let c: boolean = false;
// getIdentity(a);
// getIdentity(b);
// getIdentity(c);
// -----2 ways ---------//
const getIdentity = (arg) => {
    return arg;
};
let a = "Hello";
let b = 1;
let c = false;
let x = getIdentity(a);
let y = getIdentity(b);
let z = getIdentity(c);
console.log(x, y, z);
