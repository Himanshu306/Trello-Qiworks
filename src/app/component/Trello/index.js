import React from 'react';
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import {useStyles} from "./style";
import {withRouter} from "react-router-dom";
import Header from './header';
import Footer from './footer';
import Image from '../../../img/hero.svg'



class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {      
        } 
    } 
   
    render(){
        
          return(
              <div>
                <Header />
                <section id="front-view">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 text-block">
                                <h1>This is me!!</h1>
                                <h3>Welcoming you all</h3>
                                <p>my fellow buddies</p>  
                            </div>
                            <div class="col-lg-1">
                                &nbsp;
                            </div>
                            <div class="col-lg-6">
                                <img width="582" class="img-fluid" src={Image} />
                            </div>
                        </div>
                    </div>
                </section>                    
                   {/* <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="row">
                                    <div class="col-sm elm-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1">
                                &nbsp;
                            </div>
                            <div class="col-sm-3">
                                <div class="row">
                                    <div class="col-sm elm-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1">
                                &nbsp;
                            </div>
                            <div class="col-sm-3">
                                <div class="row">
                                    <div class="col-sm elm-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                <Footer />
             </div>
    
            )
    }
}

export default compose(withRouter,withStyles(useStyles))(Dashboard);

