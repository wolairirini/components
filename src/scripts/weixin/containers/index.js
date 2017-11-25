



import React, {Component} from "react"
import {render} from "react-dom"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


import App from "./app"
import Wechat from "./wechat"
import Contact from "./contacts"
import Find from "./find"
import My from "./my"
import Contactdetail from "./contactdetail"

import Finddetail from "./finddetail"


render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/wechat/微信" />
            <Route path="wechat/:title" component={Wechat} onEnter={n=>{console.log(n)}}/>
            <Route path="contact/:title" component={Contact}/>
            <Route path="find/:title" component={Find}/>
            <Route path="my/:title" component={My}/>
        </Route>

        <Route path="/contactdetail/:year/:title/:ptitle" component={Contactdetail}/>
        
        <Route path="/finddetail/:ptitle" component={Finddetail}/>
        
    </Router>),
    document.getElementById('app')
)