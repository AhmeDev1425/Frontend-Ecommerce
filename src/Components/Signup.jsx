


export default function Signup() {
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
                        <form className="login-form">
                            <div className="form-group">
                                <input type="email" placeholder="Email" required/>
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Password" required/>
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" required/>
                            </div>

                            <button type="submit" className="btn btn--primary btn--full">Sign up</button>
                            
                        </form>
                    </div>
                </div>
            {/* </div>  */}
        </>
    );
}