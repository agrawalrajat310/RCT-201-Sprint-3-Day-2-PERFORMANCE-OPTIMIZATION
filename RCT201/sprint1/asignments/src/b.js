var array_of_PhoneBooks = [];
var PhoneBook = function (arg) {
    array_of_PhoneBooks.push(arg);
};
var address = [{
        houseNumber: 143,
        street: "nagbhid",
        city: "bramhapuri",
        state: "maharastra",
        postalCode: 441206,
        country: "India"
    }];
PhoneBook({ Prefix: "mr",
    phones: [9579550881],
    addresses: address,
    email: "akshaykadu24@gmail.com",
    firstname: "akshay",
    lastname: "kadu"
});
// console.log(address)
console.log(array_of_PhoneBooks);
