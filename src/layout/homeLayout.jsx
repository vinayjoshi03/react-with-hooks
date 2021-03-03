import React,{Component} from 'react'

class HomeLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                
                
                {this.props.children}
            </div>
        )
    }
}

export default HomeLayout