import React  from 'react';
import _ from './login.css';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { openLogin } from '../../service/Auth';


// class Initlogin extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             crendetials: {
//                 user: '',
//                 password: ''
//             },
//             exemplo: 0
//         }

//         this.changeCredentials = this.changeCredentials.bind(this);
        
//     }
    
//         changeCredentials(e) {
//         let aux = this.state.crendetials;
//         aux[e.target.id] = e.target.value; 

//         this.setState({crendetials: aux});
//         this.setState({exemplo: aux.user.length});
       
//     }

//     render () {

//     return <> 
//     <div className="login-main"> 
//         MEU CADASTRO (class) - {this.state.exemplo}

//         <input name="user" onChange={this.changeCredentials} id="user" placeholder="Digite seu e-mail" />
//         <input name="password" type="password" onChange={this.changeCredentials} id="password" placeholder="Digite sua senha" /> 

//         < button onClick={() => {
            
//             openLogin ()
//             history.push('/')
//         }}>
//              ENTRAR
//         </ button>  
 
//         </div>  
//         </>
//     }

// }



const Startlogin = (props) => {
    let history = useHistory()
    const [crendetials, setCredentials] = useState({
        user: '',
        password: ''
       })

    const changeCredentials = (e) => {
        let aux = crendetials;
        aux[e.target.id] = e.target.value; 
        setCredentials(aux)
    }

    return <> 
    <div className="login-main"> 
        MEU CADASTRO 

        <input name="user" onChange={changeCredentials} id="user" placeholder="Digite seu e-mail" />
        <input name="password" type="password" onChange={changeCredentials} id="password" placeholder="Digite sua senha" /> 

        < button onClick={() => {
            console.log(crendetials)
            openLogin(crendetials)
            history.push('/')
        }}>
             ENTRAR
        </ button>
      
 
        </div>
     
                
        </>
    }

    
export default Startlogin;