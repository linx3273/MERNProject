import React,{useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';


const Register = () =>{
    const history = useNavigate();

    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    })
    
    let name,value;

    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value})

    }

    const postData = async (e) => {
        e.preventDefault();

        const {name,email,phone,password,cpassword} = user;

        const res = await fetch('/register',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:name,email:email,phone:phone,password:password,cpassword:cpassword
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Failed to register");
        }else{
            window.alert("Registration Done");
            history('/login');

        }
    }

    return (
    <div className="signup-form">
        <h2 className="form-title">Register</h2>
            <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                    <label htmlFor="name">
                        <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Enter E-Mail ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="zmdi zmdi-phone material-icons-name"></i>
                    </label>
                    <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} placeholder="Mobile Number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs} placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">
                        <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Your Password"/>
                </div>

                <div className="form-group form-button">
                    <button type="submit" id="register" className="form-submit" onClick={postData}>Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register