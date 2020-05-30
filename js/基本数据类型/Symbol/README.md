## Symbol
* 是一种基本数据类型
* 作为对象属性的标识符（作用）
* 具有静态属性和静态方法
* symbol值是唯一的

### 创建Symbol

```js
var sym1 = Symbol('foo');
var symbol = new Symbol(); // -> TypeError
```

> es6不支持原始数据类型创建显示包装器对象， 如果真要创建Symbol包装器对象，可以使用Object

```js
var sym = Symbol('foo');
typeof sym; // -> "symbol"
var symObj = Object(sym);
typeof symObj; // -> "object"
```

### 全局共享Symbol

* Symbol.for()
* Symbol.keyFor()

> 以上方法可以从全局的symbol注册表设置和取得symbol

### 查找对象的symbol属性

Object.getOwnPropertySymbols()

### Symbol.iterator
为每一个对象定义了默认的迭代器，可被for...of使用

```js
//自定义迭代器
var myIterator = {};
myIterator[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
}
[...myIterator]; // -> [1,2,3]
```

### Symbol.hasInstance
判断某对象是否为某构造器的实例

```js
// 实现自定义的instanceof行为
class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log([] instanceof MyArray);// -> true
```
