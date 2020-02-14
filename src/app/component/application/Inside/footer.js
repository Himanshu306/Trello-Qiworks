import React from 'react';
import {useStyles} from "./style";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";

class Dashboard_footer extends React.Component{

    constructor(props){
        super(props)
        this.state = {      
        } 
    }
    render(){
        const classes   =   this.props.classes;
        return(
            <div className={classes.footeritem}>
                <i>
                    This is created by himanshu and team.
                </i>    
            </div>
        )
    }
}

export default compose(withRouter,withStyles(useStyles))(Dashboard_footer);