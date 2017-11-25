import React,{Component} from "react"
import SubHead from "../../components/subHead"

export default class Wechat extends Component{

    goback=()=>{
        this.props.router.goBack();
    }
    render(){
        
        return (
            <div className="moveIn">
                <SubHead subTitle={this.props.params.title} pTitle={this.props.params.ptitle}/>
                <h1>电影==== 《{this.props.params.title}》</h1>
                <h1>年份==== 《{this.props.params.year}》</h1>
                <img src={this.props.location.query.img}/>

                <button onClick={this.goback}>返回</button>
            </div>
        )
    }
} 