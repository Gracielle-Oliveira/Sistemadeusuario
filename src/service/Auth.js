import React from 'react';


const logUser = () => {
    let token = localStorage.getItem('token')

    return fetch(`http://localhost:4000users?/token=${token}`).then(
        (result) => {

            return result.json()
        }
    )

    
}

function openLogin (crendetials) {

    return fetch(`http://localhost:4000/users?user=${crendetials.user}&password=${crendetials.password}`).then(
        (result) => {

            return result.json()
        }
    )


    // if (crendetials.user == 'gracielle' && crendetials.password == '313131'){
    //     localStorage.setItem('token', 'logintoken')
    
    //     return true

    // }
    
}


const setToken = (token) => {
    localStorage.setItem('token', token)
}

export {logUser, openLogin, setToken}