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

// -----Assignments 1---------//---------------------------------------
// interface People {  
//   firstname: string  
//   lastname?: string  
// }  
// function printName<T extends People>(obj: T): void { 
//   let key:T=obj
// for(let i in key)
//   console.log(key[i]);  
// }  
// let player: People = {  
//   firstname: 'Rohit',
//    lastname: "Sharma"  
// }  
// printName(player);  

// -----------------------------------------------------------------------------------------////


// type Students={
//   firstname: string,
//   lastname?:string 
// }
// let obj={
//   firstname: "hello",
//   lastname: "world"
// }

// let x = getIdentity<Students>(obj);
// console.log(x);

// let a: string = "Hello";
// let b: number = 1;
// let c: boolean = false;

// let x = getIdentity<string>(a);
// let y = getIdentity<number>(b);
// let z = getIdentity<boolean>(c);

// console.log(x, y, z);

//example 3

// const useState = <A>(arg: A): [A, (a: A) => void] => {
//   let v: A = arg;

//   const setV = (newValue: A): void => {
//     v = newValue;
//   };
//   return [v, setV];
// };

// const [count, setCount]= useState(0)
// const [value, setValue]= useState("")
// const [form, setForm]= useState({id: 1, name:"", age:"", status: false})
