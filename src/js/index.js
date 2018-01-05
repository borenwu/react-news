import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Footer from './components/footer'
import IndexBody from './components/IndexBody'

class Index extends React.Component{
    componentWillMount(){
        console.log('index  --component will mount')
    }

    componentDidMount(){
        console.log('index  --component did mount')
    }

    render(){
        return(
            <div>
                <Header/>
                <IndexBody/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'))