import React from 'react';

const Login = () =>{
    return (
    <div className="signin-form">
        <h2 className="form-title">Login</h2>
            <form className="login-form" id="login-form">
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter E-Mail ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Enter Password"/>
                </div>

                <div className="form-group form-button">
                    <button type="submit" id="login" className="form-submit">Login</button>
                </div>
            </form>
    </div>
    )
}

export default Login