import React, { useEffect, useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import RegNo from './RegNo';

let link = 'https://wild-puce-dove-hose.cyclic.app/register' /*|| 'http://localhost:4000/register'*/;



const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [id, setId] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
         navigate('/');
    };

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        auth ? navigate('/') : navigate('/signUp');
                
    },[navigate])

    function handleRegister() {
   
        axios.post(link,{

            name: name,
            phone:phone,
            email: email,
            password:pass,
            image:""

        }).then((result) => {
            if(result.data.email){
                localStorage.setItem('user',JSON.stringify(result.data));
                setId(result.data._id);
                setOpen(true);     
            }else{
                alert("Email Already Registered");
            }
        })
        .catch((error) => alert("! Registration failed try again"));
    }

    return (
        <div className='Register'>

            <h1>Register</h1>

            <input type={'text'}
                placeholder='Enter Username'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input type={'number'}
                placeholder='Enter Mobile Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

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


            <button
                className='reg_btn'
                onClick={handleRegister}
            >Sign Up</button>

            <RegNo id={id} handleClose={handleClose} open={open}/>
        </div>
    )
}

export default SignUp;