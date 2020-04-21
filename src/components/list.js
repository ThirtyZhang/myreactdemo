import React from 'react' // 引入react
import '../css/list.css'  // 引入样式

// 定义组件
class List extends React.Component {
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