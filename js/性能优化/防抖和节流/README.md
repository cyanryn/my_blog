## 防抖和节流

### 防抖

>事件被触发后，n秒后再去执行回调，如果n秒内重新触发该事件，那么要重新计时。(多次执行变成最后一次执行)

```js
// 防抖
function debounce(func, delay) {
    let timer = null;
    return function(arg) {
        let self = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(function() {
            func.call(self, arg);
        }, delay);
    }
}

```

### 节流

>在一个单位时间内，只能触发一次函数；如果在这个单位时间内触发多次函数，只有一次生效。（多次执行变成每个一段时间执行）

```js
//1
function throttle(func, time) {
    let flag = true;
    return function(...arg) {
        let self = this;
        if(!flag) return;
        flag = false;
        setTimeout(function() {
            func.apply(self, arg);
            flag = true;
        }, time);
    }
}

//2
function throttle2(func, time) {
    let last = 0;
    return function(...arg) {
        let self = this;
        let now = +new Date();
        if(now - last < time) return;
        last = now;
        func.apply(self, arg);
    }
}
```

### 防抖和节流一起使用

>防抖触发的太频繁会导致一次响应也没有，我们希望到固定时间必须给用户一个响应。

```js
function throttle(func, delay) {
    let last = 0, timer = null;
    return function(...arg) {
        let self = this;
        let now = +new Date();
        if(now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                last = now;
                func.apply(self, arg);
            }, delay);
        } else {
            last = now;
            func.apply(self, arg);
        }
    }
}
```
