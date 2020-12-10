import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import * as Auth from '../service/Auth';

const Protroute = ({component: Component, ...rest}) => {
    return (

        < Route {...rest} render={ (props) => {
                
            if (Auth.logUser() === true) {
              return <Component {...props} />
            } else {
              return <Redirect to={{ pathname: '/login' }} />
            }
            }} />
    )

}

export default Protroute