import React from 'react'

class Mycomponent extends React.Component{

    constructor(props){
        super(props)
        this.state = { likescount:0}
        this.onlike=this.onlike.bind(this)
    }

    onlike(){
        let newlikescount=this.state.likescount+1
        this.setState({likescount: newlikescount})
    }

    render(){
        return(
            <div>
                <h3>este es mi componente 3322</h3>
                likes: <span>{this.state.likescount}</span>
                <div><button onClick={this.onlike}>like me</button></div>
            </div>
        )
    }
    
}
export default Mycomponent;