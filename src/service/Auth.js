import React from 'react';


const logUser = () => {
    let token = localStorage.getItem('token')

    if (token && token !== '') {
        return true
    }

    return false

}

function openLogin (crendetials) {

    if (crendetials.user == 'gracielle' && crendetials.password == '313131'){
        localStorage.setItem('token', 'logintoken')
    
        return true

    }
    return false
} 



export {logUser, openLogin}