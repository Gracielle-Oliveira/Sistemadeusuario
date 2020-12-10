import React from 'react';
import {useHistory} from 'react-router-dom';


const Userlist = () => {
    
    let history = useHistory()

    const closeLogin = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return <> 
    <div> 
        Listagem 
        <button onClick={closeLogin}>
            SAIR
        </button>
    </div>


    </>
}

export default Userlist; 