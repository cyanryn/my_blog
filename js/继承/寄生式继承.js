var person = {
    name: 'teacher',
    books: ['C', 'C++']
}

function object(obj) {
    function F(){}
    F.prototype = obj;
    return new F();
}

function createAnother(original) {
    let clone = object(original);
    clone.walk = function() {
        return true
    }
    return clone;
}

let anotherPerson = createAnother(person)
console.log(anotherPerson.walk())


