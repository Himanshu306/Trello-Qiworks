import React from 'react';
import {connect} from "react-redux";

import {Switch, Route, Redirect} from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles";
import {withWidth,BottomNavigation} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import {useStyles} from './style'
import {Container} from "@material-ui/core"
import Dashboard from '../Trello/index'
import InsideDashboard from './Inside/index'

class  Application extends React.Component {
    constructor(props){
        super(props);
        this.state={
          showDrawer:false,
        }
    }

   



   

    render(){
            
        const classes   = this.props.classes;
        return(
            <div className={classes.root}>
                <Container className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path={`${this.props.match.path}/dashboard`} component={InsideDashboard} />

                        <Redirect exact path={`${this.props.match.path}`} to={`${this.props.match.path}/dashboard`}/>
                    </Switch>
                </Container>
            </div>
        )     
    }
   
}
 
export default compose(withRouter,withStyles(useStyles),withWidth())(Application)