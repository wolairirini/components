





import React,{Component} from "react"

export default class Head extends Component{
    render(){
        console.log(this.props.params);
        return (
            <header className="head">
                <span>{this.props.title}</span>
            </header>
        )
    }
} 