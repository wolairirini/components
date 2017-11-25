


import React,{Component} from "react"
import axios from "axios";
import {Link} from "react-router"

export default class Wechat extends Component{

    constructor(props){
        super(props);
        this.state = {
            mv:[]
        }
    }

    componentWillMount(){
        axios.get("http://47.94.208.182:3000/movie")
            .then(res=>{
                this.setState({
                    mv:res.data
                })
            })
    }

    render(){
        console.log(this.props.params)
        return (
            <div>
                <h1>hello contact</h1>
                <div>
                    {
                        this.state.mv.map((item,idx)=>{
                            return (
                                <p key={idx}>
                                    <Link to={"/contactdetail/"+item.year+"/"+item.title+"/通讯录?img="+item.images.large} style={{fontSize:36}}>{item.title}</Link>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} 