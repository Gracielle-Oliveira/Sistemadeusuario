import React from 'react';


const logUser = async () => {
    let token = localStorage.getItem('token')

    let getUserByToken = await fetch(`http://localhost:3001/token=${token}`).then(
        (result) => {

            return result.json()
        }
    )

    if (getUserByToken.length > 0) {
        return true
    }

    return false

}

function openLogin (crendetials) {

    return fetch(`http://localhost:3001/users?user=${crendetials.user}&password=${crendetials.password}`).then(
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