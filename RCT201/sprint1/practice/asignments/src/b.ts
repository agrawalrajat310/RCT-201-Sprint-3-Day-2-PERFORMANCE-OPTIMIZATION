
interface Address {
    houseNumber:number,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string,
}
interface PersonDetails{
    Prefix?:string,
    phones:number[]
    addresses:Array<Address>,
    email?:string,
    firstname:string,
    lastname:string,
    middlename?:string
}

let array_of_PhoneBooks:PersonDetails[] = []

const PhoneBook = (arg:PersonDetails)=>{
    array_of_PhoneBooks.push(arg)
}

let address:Array<Address> = [{
    houseNumber:143,
    street:"nagbhid",
    city:"bramhapuri",
    state:"maharastra",
    postalCode:441206,
    country:"India",
}]

PhoneBook({Prefix:"mr",
    phones:[9579550881],
    addresses:address,
    email:"akshaykadu24@gmail.com",
    firstname:"akshay",
    lastname:"kadu",
    })

    // console.log(address)
console.log(array_of_PhoneBooks)