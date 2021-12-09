import React from 'react';

const Register = () =>{
    return (
    <div className="signup-form">
        <h2 className="form-title">Register</h2>
            <form className="register-form" id="register-form">
                <div className="form-group">
                    <label htmlFor="name">
                        <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter E-Mail ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="zmdi zmdi-phone material-icons-name"></i>
                    </label>
                    <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Mobile Number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">
                        <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"/>
                </div>

                <div className="form-group form-button">
                    <button type="submit" id="register" className="form-submit">Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register