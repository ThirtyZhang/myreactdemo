// 引入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/list'

let loading = false
let aa = [1,2]
function my(){
  if (loading){
    return <div>
      加载中....{aa}
    </div>
  }else{  
    return <div>
      加载完成....{aa.map(a => "abc") } 22
    </div>
  }
}

// 把方法的返回结果渲染到 public/index.html 中
ReactDOM.render(<List></List>,document.getElementById("root"))