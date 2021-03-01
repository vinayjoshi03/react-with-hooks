import React,{Component} from 'react'
import HomeHeader from './homeHeader'

class HomeLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <HomeHeader />
                {this.props.children}
            </div>
        )
    }
}

export default HomeLayout