Teacher.prototype.assign = function() {
    console.log('assign homework')
}

function Teacher() {
    this.name = 'teacher'
    this.books = ['C', 'Java']
}

Student.prototype = new Teacher();

function Student() {

}

let stu1 = new Student();
stu1.assign()
console.log(stu1.name);
stu1.books.push('C#');
console.log(stu1.books);

let stu2 = new Student();
console.log(stu2.name);
stu2.books.push('Web');
console.log(stu2.books);

console.log(stu1.constructor, Student.prototype.constructor)
