import React,{Component} from "react"
import SubHead from "../../components/subHead"

export default class Wechat extends Component{

    goback=()=>{
        this.props.router.goBack();
    }
    render(){
        
        return (
            <div>
                <SubHead  pTitle={this.props.params.ptitle}/>
                <h1>发现的详情</h1>
            </div>
        )
    }
} 