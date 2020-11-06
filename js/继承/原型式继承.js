var person = {
    name: 'teacher',
    books: ['C', 'C++']
}

function object(obj) {
    function F(){}
    F.prototype = obj;
    return new F();
}

let test1 = object(person);
console.log(test1.name)
test1.books.push('Java')
console.log(test1.books)

let test2 = object(person);
console.log(test2.name)
test2.books.push('C#')
console.log(test2.books)

console.log(test1.prototype === test2.prototype)

// 2
var person = {
    name: 'teacher',
    books: ['C', 'C++']
}
let test3 = Object.create(person, {
    name: {
        value: 'Gred'
    }
});
console.log(test3.name)
test3.books.push('Java')
console.log(test3.books)

let test4 = Object.create(person);
console.log(test4.name)
test4.books.push('C#')
console.log(test4.books)

console.log(test1.prototype === test2.prototype)