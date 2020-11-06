Teacher.prototype.assign = function() {
    console.log('assign homework')
}

function Teacher(name) {
    this.name = name
    this.books = ['C', 'Java']
}


function Student() {
    Teacher.call(this, 'Lily')
}

let stu1 = new Student();
// stu1.assign()
console.log(stu1.name);
stu1.books.push('C#');
console.log(stu1.books);

let stu2 = new Student();
console.log(stu2.name);
stu2.books.push('Web');
console.log(stu2.books);

console.log(stu1.constructor, Student.prototype.constructor)
