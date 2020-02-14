import React from 'react';
import {useStyles} from "./style";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@material-ui/core';


class Dashboard_header extends React.Component{
   
    render(){
        return(
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#"><i>Trello</i></a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li style ={{'cursor':'pointer','color':'#ffffff'}} onClick={()=>{
                            this.props.history.push("/login")
                        }}><a><span class="glyphicon glyphicon-log-in" style={{'margin-right':'5px'}}></span>Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default compose(withRouter,withStyles(useStyles))(Dashboard_header);