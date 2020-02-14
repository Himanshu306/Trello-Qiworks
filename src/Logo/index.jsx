import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

class Logo extends React.Component {
    render() {
        return (
            <h1 className='app_logo_new'>Lets Go</h1>
            // <img src="/images/app_logo.png" className='app_logo'/>
        );
    }

}

export default withRouter(connect(function(store){
    return {
    };
})(Logo))