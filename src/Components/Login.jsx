import { useState } from "react";
// import axios from 'axios'


export default function Login() {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [valid, setValid] = useState(false);

    function submitSignup(e) {
        let flag = false
        e.preventDefault();
        setValid(true)
        if (email !== "" || password.length > 8 ){
            flag = true
        }
        if (flag){
            
            // axios.post(url,{data}).then()
        }
    }
    return (

        <>
            {/* <div className="modal login-modal"> */}
                <div className="modal__backdrop">
                    <label htmlFor="login-modal"></label>
                </div>

                <div className="modal__content">

                    <div className="modal__header">
                        <h3>Sign in</h3>
                        <label htmlFor="login-modal" className="modal__close">×</label>
                    </div>
                
                    <div className="modal__body">
                        <form onSubmit={submitSignup} className="login-form">
                            <div className="form-group">

                                {!(email) && valid 
                                &&(<p className="validation-false" >× Email is required .</p>)
                                }

                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} required/>

                            </div>

                            <div className="form-group">
                                {valid && password.length < 8
                                &&(<p className="validation-false" >× Your account is invalid . </p>)
                                }
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required/>
                            </div>

                            <button type="submit" className="btn btn--primary btn--full">Login</button>

                            <p className="login-form__footer">
                                Don't have an account? <a href="#">Sign up</a>
                            </p>
                            
                        </form>
                    </div>
                </div>
            {/* </div>  */}
        </>
    );
}