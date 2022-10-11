import React from 'react';
import "../../asset/style/login.css"
import { useState } from 'react';
import Logo from '../../asset/image/Focal Real.png'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [confimPassword, setconfimPassword] = useState('');
    const [numberPhone, setNumberPhone] = useState('')
    const [error, setError] = useState({
        account: false,
        numberPhone: false,
        password: false,
        confimPassword: false
    })
    const [notify, setNotify] = useState({
        account: "We'll never share your email with anyone else",
        password: "",
        confimPassword: "",
        numberPhone: ""
    })
    const validate = () => {
        let check = true;
        if (account === '') {
            setError(prev => ({
                ...prev,
                account: true
            }))
            setNotify(prev => ({
                ...prev,
                account: "Please enter a account"
            }))
            check = false
        }
        if (numberPhone === '') {
            setError(prev => ({
                ...prev,
                numberPhone: true
            }))
            setNotify(prev => ({
                ...prev,
                numberPhone: "Please enter a number phone"
            }))
            check = false
        }
        if (password === '') {
            setError(prev => ({
                ...prev,
                password: true
            }))
            setNotify(prev => ({
                ...prev,
                password: "Please enter a password"
            }))
            check = false
        } 
        if (confimPassword === '') {
            setError(prev => ({
                ...prev,
                confimPassword: true
            }))
            setNotify(prev => ({
                ...prev,
                confimPassword: "Please enter a confirm password"
            }))
            check = false
        }
        return check
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (validate()) {
            console.log("submit thanh cong")
            navigate("/login")
        }
        else {
            console.log("that bai")
        }
    }
    return (
        <div className="Login">
            <div className="Login__form">
                <div className='Login__form_img'>
                    <img style={{ width: "150px" }} src={Logo} />
                </div>
                <div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={account}
                            autoComplete='off'
                            onChange={e => setAccount(e.target.value)}
                            placeholder="Email Address"
                            onFocus={() => {
                                setError(prev => ({
                                    ...prev,
                                    account: false
                                }))
                                setNotify(prev => ({
                                    ...prev,
                                    account: "We'll never share your email with anyone else"
                                }))
                            }}
                        // inputprops={offAutoComplete}
                        />
                        <div id="emailHelp" style={{ color: error.account ? "#f03f20" : "" }} className="form-text notify">{notify.account}</div>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="exampleInputPassword1"
                            value={numberPhone}
                            onChange={e => setNumberPhone(e.target.value)}
                            placeholder="Number phone"
                            onFocus={() => {
                                setError(prev => ({
                                    ...prev,
                                    numberPhone: false
                                }))
                                setNotify(prev => ({
                                    ...prev,
                                    numberPhone: ""
                                }))
                            }}
                        // inputprops={offAutoComplete}
                        />
                        <div id="emailHelp" style={{ color: error.numberPhone ? "#f03f20" : "" }} className="form-text notify">{notify.numberPhone}</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            onFocus={() => {
                                setError(prev => ({
                                    ...prev,
                                    password: false
                                }))
                                setNotify(prev => ({
                                    ...prev,
                                    password: ""
                                }))
                            }}
                        // inputprops={offAutoComplete}
                        />
                        <div id="emailHelp" style={{ color: error.password ? "#f03f20" : "" }} className="form-text notify">{notify.password}</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            value={confimPassword}
                            onChange={e => setconfimPassword(e.target.value)}
                            placeholder="Confrim Password"
                            onFocus={() => {
                                setError(prev => ({
                                    ...prev,
                                    confimPassword: false
                                }))
                                setNotify(prev => ({
                                    ...prev,
                                    confimPassword: ""
                                }))
                            }}
                        // inputprops={offAutoComplete}
                        />
                        <div id="emailHelp" style={{ color: error.confimPassword ? "#f03f20" : "" }} className="form-text notify">{notify.confimPassword}</div>
                    </div>
                    <div className="login__submit form-register">
                        <button onClick={handleSubmit} className="btn btn-primary btn-submit btn-form-register">Submit</button>
                    </div>
                </div>
            </div>
            <span style={{ color: "#fff", bottom: 30, left: 20, position: "fixed" }}>&copy;votrungkien</span>
            {/* <iframe style={{border:0, width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
        </div>
    )
}
export default Login