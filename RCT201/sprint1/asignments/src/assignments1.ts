interface People {  
    firstname: string  
    lastname?: string  
  }  
  function printName<T extends People>(obj: T): void { 
    let key:T=obj
  for(let i in key)
    console.log(key[i]);  
  }  
  let player: People = {  
    firstname: 'Rohit',
     lastname: "Sharma"  
  }  
  printName(player);  
  