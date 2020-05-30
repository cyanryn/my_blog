## 绑定事件
1.例如：onclick

2.addEventListener('click', func, true)

3.attachEvent

## 事件冒泡

### 阻止事件冒泡

1.使用**e.stopPropagation()**

2.**e.target==e.currentTarget**,让触发事件元素等于绑定事件元素，也可以阻止事件冒泡。

3.IE8及以下使用**window.event.cancelBubble = true**

### 阻止默认事件

1.**e.preventDefault()**

2.**return false**,(jq中，既可以阻止默认事件，也可以阻止冒泡)

3.IE8及以下**window.event.returnValue = false**