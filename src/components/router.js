import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import * as Auth from '../service/Auth';

const Protroute = ({component: Component, ...rest}) => {
    return (

        < Route {...rest} render={ (props) => Auth.logUser().then( (getUserByToken) => {

            
              if (getUserByToken.length > 0) {
                return <Component {...props} />
              } else {
                return <Redirect to={{ pathname: '/login' }} />
              }
            })
            
            } />
    )

}

export default Protroute