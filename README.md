## 创建启动

初始化项目，命令： `npx create-react-app myreact`

切换到项目根目录: `cd myreact`

启动: `npm start`



## Demo

`src/index.js` 在文件中输入以下内容

```js
// 引入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

let loading = false

function my(){
  if (loading){
    return <div>
      加载中....
    </div>
  }else{
    return <div>
      加载完成....
    </div>
  }
}

// 把方法的返回结果渲染到 public/index.html 中
ReactDOM.render(my(),document.getElementById("root"))
```

在浏览器中查看结果

```
加载完成....
```



## 样式

在style里面我们通过对象的方式传递数据

```react
<li key={item.id} style={{'color': 'red',"backgroundColor": 'pink'}}>{item.name}</li>
```

这种方式比较的麻烦，不方便进行阅读，而且还会导致代码比较的繁琐

##### 

创建CSS文件编写样式代码

```css
.container {
    text-align: center
}
```

在js中进行引入，然后设置类名即可

```react
import './css/index.css'

<li className='container' key={item.id} style={{'color': 'red',"backgroundColor": 'pink'}}>{item.name}</li>
```

## 组件化

### 定义样式

`src/css/list.css`

```css
.list{
    width: 300px;
    height: 500px;
    margin: 10px auto; 
    display: block;
}
......
```

### 定义组件并导出

`src/components/list.js`

```js
import React from 'react' // 引入react
import '../css/list.css'  // 引入样式

// 定义组件
class List extends React.Component {
    // 定义数据
    state = {
        comments: [
            { id: 1, name: 'jack', content: '沙发！！！' },
            { id: 2, name: 'rose', content: '板凳~' },
            { id: 3, name: 'tom', content: '楼主好人' }
        ]
    }
    render() {
        return <div className='list'>
            <input type='text' placeholder="请输入评论人" ></input>
            <textarea></textarea>
            <button type='submit'>提交评论</button>

            <ul>
                {
                this.state.comments.map(item => {
                    return (
                    <li key={item.id}>
                        <h3>评论人：{item.name}</h3>
                        <p>评论内容：{item.content}</p>
                    </li>)
                })
                }

            </ul>
        </div>
    }
}
// 导出组件
export default List
```

### 引入组件

`src/index.js`

```js
import List from './components/list' // 引入

// 把方法的返回结果渲染到 public/index.html 中
ReactDOM.render(<List></List>,document.getElementById("root"))
```

