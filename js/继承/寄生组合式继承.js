Teacher.prototype.assign = function() {
    console.log('assign homework')
}

function Teacher() {
    this.name = 'teacher'
    this.books = ['C', 'Java']
}

function Student() {
    Teacher.call();
}

function inherit(subType, superType) {
    function F(){}
    F.prototype = superType.prototype;
    subType.prototype = new F();
    subType.prototype.constructor = subType;
}

inherit(Student, Teacher)
