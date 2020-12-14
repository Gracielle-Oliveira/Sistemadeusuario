import React  from 'react';
import _ from './login.css';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { openLogin, setToken } from '../../service/Auth';
import {ValidateEmail} from '../../utils/validation';


const Startlogin = (props) => {
    let history = useHistory()
    const [crendetials, setCredentials] = useState({
        user: '',
        password: ''
       })

    const changeCredentials = (e) => {
        let aux = crendetials;
        aux[e.target.id] = e.target.value
        setCredentials(aux)
    }

    
        return <> 
    <div className="login-main"> 
        MEU CADASTRO (Class)
        {/* <div className="error-message" style={{display: this.state.err ? 'block' : 'none'}}>
            {this.state.errMessage}

        </div> */}

        <input name="user" onChange={changeCredentials} id="user" placeholder="Digite seu e-mail"/>
        <input name="password" type="password" onChange={changeCredentials} id="password" placeholder="Digite sua senha"/> 

        <button onClick = {()=>{
            console.log(crendetials)
            if (this.state.crendetials.password.length < 4) {
                this.setstate({err:true, errMessage: "Senha dever ter pelo menos quatro caracteres"})
                return  
            }

            if (!ValidateEmail(this.state.crendetials.user)) {
                this.setstate({err:true, errMessage: "Email inválido"})
                return  
            }

            openLogin (crendetials).then(
                (resultJson) => {

                    if (resultJson.length > 0) {
                        setToken (resultJson[0].token)
                        history.push('/')
                }else{
                    this.setstate({err:true, errMessage: "Não é possível logar"})
                }
            }
       )
            
        }}>
            ENTRAR                          
        </button>
    </div>
    </>

}




    
export default Startlogin;