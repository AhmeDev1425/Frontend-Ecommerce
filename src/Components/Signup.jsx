import { useState } from "react";



export default function Signup() {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [repassword, setRepassword] = useState("") 
    const [valid, setValid] = useState(false);

    function submitSignup(e) {
        e.preventDefault();
        setValid(true)
    }
    return (

        <>
            {/* <div className="modal login-modal"> */}
                <div className="modal__backdrop">
                    <label htmlFor="login-modal"></label>
                </div>

                <div className="modal__content">

                    <div className="modal__header">
                        <h3>Sign up</h3>
                        <label htmlFor="login-modal" className="modal__close">×</label>
                    </div>
                
                    <div className="modal__body">
                        <form onSubmit={submitSignup} className="login-form">
                            <div className="form-group">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} required/>
                            </div>

                            <div className="form-group">
                                {password.length < 8 && valid 
                                &&(<p className="validation-false" >× Password must be more than 8 chars .</p>)
                                }
                                {password === repassword  && password.length > 8 &&  repassword.length > 8
                                &&(<p className="validation-true" > ✓ Valid Password.</p>)
                                }
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required/>
                            </div>

                            <div className="form-group">
                                {password !== repassword && valid  
                                &&(<p className="validation-false" >× Two password shouldn,t be different .</p>)
                                }
                                {password.length < 8 && valid 
                                &&(<p className="validation-false" >× Confirmed Password must be more than 8 chars .</p>)
                                }

                                {password === repassword && password.length > 8 &&  repassword.length > 8 
                                &&(<p className="validation-true" > ✓ Two passwords are matched .</p>)
                                }
                                <input onChange={(e) => setRepassword(e.target.value)} type="password" placeholder="Confirm Password" value={repassword} required/>
                            </div>

                            <button type="submit" className="btn btn--primary btn--full">Sign up</button>
                            
                        </form>
                    </div>
                </div>
            {/* </div>  */}
        </>
    );
}