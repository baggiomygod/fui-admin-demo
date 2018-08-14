
### react ts app

!!! 引入stylus也无效...

### react-router
    react-router-dom 浏览器端使用
    react-router 是基础的插件包

##### HashRouter BrowerRouter
    - http://localhost:3000/#/admin   HashRouter
    - http://localhost:3000/admin    BrowerRouter
##### Router: path, exact, component, render

##### NavLink Link

##### Switch

##### Redirect

### 遇到的问题
2018-08-12 onClick传递函数是报错
1. onClick={handler} // 方法不是void类型的 ”不能写括号“，否则会报错，类型不匹配：Types of property 'onClick' are incompatible.
    ```
        // 这里onClick事件不能{handler()}---> 应该是{handker},或者使用箭头函数不会报错
       <Button type="primary" onClick={ this.openNotification('success) }>Open the notification box</Button>
    ```
    2. 标签里使用() => {}会报错：Lambdas are forbidden in JSX attributes due to their rendering performance impact
    ```
        // 使用箭头函数有新的问题汇报：不能使用Lambdas表达式----一个方法是取消ts-lint jsx-no-lambda的错误检查
       <Button type="primary" onClick={ () => this.openNotification('success) }>Open the notification box</Button>
    ```
##### 解决 使用bind传递参数
    ```
       <Button type="primary" onClick={ this.openNotification.bind(this, 'success') }>Open the notification box</Button>
    ```

    > 是否有其他解决方案？