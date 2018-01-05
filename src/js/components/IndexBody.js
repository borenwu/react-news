import React from 'react'

export default class IndexBody extends React.Component{
    componentWillMount(){
        console.log('index body --component will mount')
    }

    componentDidMount(){
        console.log('index body --component did mount')
    }

    render(){
        let username = ''
        let boolInput = true

        return(
            <div>
                <h2>页面主题内容</h2>
                <p>{username=='' ? '用户还没登陆' : '用户名：'+username}</p>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
            </div>
        )
    }
}
