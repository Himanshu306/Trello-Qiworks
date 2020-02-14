import React from 'react';
import {connect} from "react-redux";

import { Card, TextField, CardHeader, CardContent, Typography, Button, CardMedia,CardActions, Link, Hidden } from '@material-ui/core';
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import {useStyles} from "./style";
import {withRouter} from "react-router-dom";
import {FormattedHTMLMessage} from 'react-intl';
import {Link as RouterLink} from 'react-router-dom';
import * as Validate from '../../action/validation';
class StartUpPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            'emailId':"",
            'password':"",
            'error':'',
            'emailIderror':'',
            'passworderror':'',
                }
        this.login  = this.login.bind(this)
       
    }

    login(){
        this.setState({'error':"",'emailIderror':'','passworderror':''})
        var email=this.state.emailId;
        if(email === null || email ===  undefined || email.trim().length === 0){
           this.setState({emailIderror:"Please enter email"})
           document.getElementById("email").focus()
           return;
        }
        // if(!Validate.email(email)){
        //     this.setState({'emailIderror':"Please provide valid email"});
        //     document.getElementById("email").focus();
        //     return;
        // }
        var password=this.state.password;
        if(password === null || password === undefined || password.trim().length === 0){
           this.setState({passworderror:"Please enter password"})
           document.getElementById("password").focus()
           return;
        }
        var post_data ={
            'email':email,
        }
        window.localStorage.setItem('user',JSON.stringify(post_data))
        this.props.history.push("/app")
    }

    render(){
        const classes=this.props.classes;
        var state=this.state;
        return(
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardMedia>
                        <div className={classes.logoContainer}>
                        </div>
                    </CardMedia>
                        <div>
                            <CardHeader 
                                className={classes.title} 
                                title={
                                    <Typography variant="h4" className={classes.titleText} >
                                       LOGIN
                                    </Typography>
                                }
                            >
                            </CardHeader>
                            <CardContent className={classes.formContainer}>
                                <TextField
                                    id="email"
                                    type="email"
                                    name="emailId"
                                    label="Email"
                                    value={this.state.emailId}
                                    onChange = {(event)=>{this.setState({'emailId':event.target.value,'emailIderror':''})}}
                                    className={classes.email}
                                    margin="dense"
                                    required
                                />
                                 {state.emailIderror.length !== 0 && 
                                    <Typography className={classes.error} variant="caption">
                                        {state.emailIderror}
                                    </Typography>
                                }
                                <TextField
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    label="Password"
                                    onChange = {(event)=>{this.setState({'password':event.target.value,'passworderror':''})}}
                                    className={classes.password}
                                    margin="dense"
                                    required
                                />
                                 {state.passworderror.length !== 0 && 
                                    <Typography className={classes.error} variant="caption">
                                        {state.passworderror}
                                    </Typography>
                                }
                                <Button variant="contained" color="primary" className={classes.button} onClick={this.login} >
                                    "LOGIN"
                                </Button>                           
                            </CardContent>
                            <Hidden smUp>
                                <CardActions>
                                    <div className={classes.background}>
                                    </div> 
                                </CardActions>
                            </Hidden>
                        </div>                 
                </Card> 
            </div>           
        );
    }
}

export default compose(withRouter,withStyles(useStyles))(StartUpPage);
