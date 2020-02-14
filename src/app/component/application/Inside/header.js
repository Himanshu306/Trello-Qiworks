import React from 'react';
import {useStyles} from "./style";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@material-ui/core';


class Dashboard_header extends React.Component{
   
    render(){
       var user =JSON.parse(window.localStorage.getItem('user'))
       console.log("sndkafn",user)
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><i>Trello</i></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user">{user.email}</span></a></li>
                        {/* <li style ={{'cursor':'pointer','color':'#fffff'}}><span class="glyphicon glyphicon-log-in"  onClick={()=>{
                            this.props.history.push("/login")
                        }}></span> Login</li> */}
                        <li style ={{'cursor':'pointer','color':'#ffffff'}} onClick={()=>{
                            this.props.history.push("/login")
                        }}><a>Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default compose(withRouter,withStyles(useStyles))(Dashboard_header);