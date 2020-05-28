## 创建方式
1.直接量

```js
var reg = /abc/i;
```

2.构造函数创建

```js
var reg = new RegExp("abc", "i");
```
## 修饰符

* i：匹配时忽视大小写
* g：执行全局匹配
* m：执行多行匹配

## 元字符

* \w：等价于[0-9A-z_]
* \W：等价于非\w
* \d：代表[0-9]
* \D：代表[^\d], ^表示非的意思
* \n：换行符
* \f：换页符
* \r：回车符
* \t：制表符
* \v：垂直制表符
* \s：空白字符
* \S：代表[^\s]
* \b：单词边界
* \B：非单词边界
* .：查找除了换行和行结束符的单个字符，即[^\r\n]
* \uxxxx： 查找以十六进制xxxx规定的Unicode字符

（十六进制从000-ffff，包含了所有字符，汉字也在里边）


```js
//制表符
var reg = /\tc/g;
var str = "abc cdefgh";
str.match(reg);// -> null

var str = "abc\tcdefgh";
str.match(reg);// -> [" c"]
```

```js
//单词边界
var reg = /\bc/g;
var str = "abc cde fgh";//三个单词，有6个单词边界
str.match(reg);// -> ["c"]

var reg = /\bcde\b/g;
var str = "abc cde fgh";
str.match(reg);// -> ["cde"]

var str = "abc cdefgh";
str.match(reg);// -> null
```


```js
//表示一切
var reg = /[\d\D]/g;
var reg = /[\s\S]/g;
```

## 量词

* n+：+表示变量可以重复出现一次到无数次
* n*：*表示可以重复出现0到无数次
* n?：重复出现的范围是0-1次
* n{x}：n要重复出现x次
* n{x,y}：重复出现x-y次
* n{x,}重复出现x-n次

## 正则表达式上的属性
1.global：正则表达式上是否具有标志g

2.ignoreCase：正则表达式上是否具有标志i

3.multiline：正则表达式上是否具有标志m

4.source：返回正则表达式的内容

5.lastIndex：表示游标的位置

## 正则表达式上的方法
1.test()：判断字符串有没有符合要求的片段，返回true或false。

2.exec()

```js
var reg = /ab/g;
var str = 'abababab';
console.log(reg.exec(str));// -> ["ab", index: 0, input: "abababab", groups: undefined]
console.log(reg.exec(str));// -> ["ab", index: 2, input: "abababab", groups: undefined]
console.log(reg.exec(str));// -> ["ab", index: 4, input: "abababab", groups: undefined]
console.log(reg.exec(str));// -> ["ab", index: 6, input: "abababab", groups: undefined]
console.log(reg.exec(str));// -> null
console.log(reg.exec(str));// -> ["ab", index: 0, input: "abababab", groups: undefined]
```

>index代表了游标的位置，游标在一圈圈的转。reg.exec从哪里开始匹配完全受lastIndex控制，并且我们可以手动控制lastIndex。

## 拓展

```js
// \1表示反向引用第一个子表达式匹配的内容，以下可以匹配一个结构为xxxx的字符串的片段
var reg = /(\w)\1\1\1/g;
```


```js
var reg= /(\w)\1(\w)\2/g;
var str = "aabb";
console.log(str.match(reg))// -> ["aabb"]
console.log(reg.exec(str))// -> ["aabb", "a", "b", index: 0, input: "aabb", groups: undefined]
```


## 支持正则表达式的String对象的方法

1.match()

把符合要求的片段放到数组里再返回

2.search()

检索与正则表达式相匹配的值，返回索引，匹配不到返回-1

3.split()

缺点：会把子表达式的匹配内容一起返回。

4.replace()


```js
var reg = "aa"
console.log(str.replace("a", "b")) // -> ba

var reg = /a/g
var str = "aa"
console.log(str.replace(reg, "b")) // -> bb

var reg = /(\w)\1(\w)\2/g
var str = "aabb"
console.log(str.replace(reg, "$2$2$1$1")) // -> bbaa

var reg = /(\w)\1(\w)\2/g
var str = "aabb"
console.log(str.replace(reg, function($, $1, $2) {
    //$ 是正则表达式匹配到的结果
    //$1 是第一个子表达式匹配的内容
    return $2+$2+$1+$1;
})) // -> bbaa
```


## 正向预查（正向断言）

```js
//以下正则表示，要找a，但有条件，要找的是后边紧跟着b的那个a，b只是起到了修饰的作用
var reg = /a(?=b)/g;
var str = "abaaaaaa";
str.match(reg) // -> ["a"]

//以下找的a是后边没有紧跟着b的a
var reg = /a(?!b)/g;
var str = "abaaaa";
str.match(reg) // -> ["a", "a", "a", "a"]
```

## 非贪婪匹配
>在量词后边加上？即可成为非贪婪匹配（能少就不多）

```js
var reg = /\w+?/g;
var str = "aaa";
str.match(reg); // -> ["a", "a", "a"]

var reg = /\w??/g;
var str = "aaa";
str.match(reg); // -> ["", "", ""]
```

## 题目
1.字符串去重

```js
var str = 'aaaaabbbbbbbbbbbbbbcccccccccc';
var reg = /(\w)\1*/g;
console.log(str.replace(reg, "$1"));// -> abc
```

2.有一个数字1000000000000，要求用科学计数法，从后往前每隔三位打个点

```js
var str = "1000000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
console.log(str.replace(reg, "."));
```