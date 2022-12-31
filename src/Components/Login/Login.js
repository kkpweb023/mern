import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Button } from '@mui/material';
import Random from './Random/Random';


let link = 'https://wild-puce-dove-hose.cyclic.app/login' /*|| 'http://localhost:4000/login'*/;


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    let [isLoading, setLoading] = useState(false);

    const [aplhNum, setaplhNum] = useState("");
    const [num, setNum] = useState("SD5T76");


    useEffect(() => {
        const auth = localStorage.getItem('user');
        auth ? navigate('/') : navigate('/login');
    }, [navigate])


    function handleLogin() {

        if (num !== aplhNum) {
            alert("Captcha not matched")
        } else {

            setLoading(true);

            axios.post(link, {
                email: email,
                password: pass
            }).then((result) => {
                setLoading(false);
                if(result.data.auth){
                    localStorage.setItem('user', JSON.stringify(result.data.user));
                    localStorage.setItem('token', JSON.stringify(result.data.auth));
                    navigate('/');
                } else {
                    alert("Please Enter correct email id and password");
                }
            }).catch((error) => alert("! Login failed try again"));
        }
    }

    function handlePass() {
        navigate('/forgotPass');
    }


    return (
        <div className='Login'>

            <h1>Login</h1>

            <input type={'email'}
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input type={'password'}
                placeholder='Enter Password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />

            <Random aplhNum={aplhNum} setaplhNum={setaplhNum} num={num} setNum={setNum} />

            <Button color="secondary" size="small"
                style={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    position: "relative",
                    left: "16%",
                    top: "20px"
                }}
                onClick={handlePass}
            >Forgot Password ?</Button>

            <button
                className='log_btn'
                onClick={handleLogin}
            >
                {isLoading ?
                    <span><i className="fa fa-refresh fa-spin fa-fw"></i></span>
                    : ""
                } Login </button>
        </div>
    )
}
export default Login;