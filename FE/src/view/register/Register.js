import React from 'react';
import "../../asset/style/login.css"
import { Password } from 'primereact/password';
import { useState } from 'react';
import Logo from '../../asset/image/Focal Real.png'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        userName: '',
        account: '',
        password: '',
        birthDate: '',
        numberPhone: '',
    })
    // const [userName, setUserName] = useState('');
    // const [account, setAccount] = useState('');
    // const [password, setPassword] = useState('');
    // const [numberPhone, setNumberPhone] = useState('')
    const [confimPassword, setconfimPassword] = useState('');
    const [error, setError] = useState({
        userName: false,
        account: false,
        numberPhone: false,
        password: false,
        confimPassword: false
    })
    const [notify, setNotify] = useState({
        userName: "",
        account: "We'll never share your email with anyone else",
        password: "",
        confimPassword: "",
        numberPhone: ""
    })
    const validate = () => {
        let check = true;
        if (user.userName === '') {
            setError(prev => ({
                ...prev,
                userName: true
            }))
            setNotify(prev => ({
                ...prev,
                userName: "Please enter a user name"
            }))
            check = false
        }
        if (user.account === '') {
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
        if (user.numberPhone === '') {
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
        if (user.password === '') {
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
                        <input type="text" className="form-control" id="exampleInputEmail1"
                            value={user.userName}
                            autoComplete='off'
                            onChange={e => setUser(
                                prev => ({
                                    ...prev,
                                    userName: e.target.value
                                }))}
                            placeholder="User Name"
                            onFocus={() => {
                                setError(prev => ({
                                    ...prev,
                                    userName: false
                                }))
                                setNotify(prev => ({
                                    ...prev,
                                    userName: ""
                                }))
                            }}
                        // inputprops={offAutoComplete}
                        />
                        <div id="emailHelp" style={{ color: error.account ? "#f03f20" : "" }} className="form-text notify">{notify.userName}</div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={user.account}
                            autoComplete='off'
                            onChange={e => setUser(
                                prev => ({
                                    ...prev,
                                    account: e.target.value
                                }))}
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
                            value={user.numberPhone}
                            onChange={e => setUser(
                                prev => ({
                                    ...prev,
                                    numberPhone: e.target.value
                                }))}
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
                        <Password
                            style={{ width: "100%" }}
                            value={user.password}
                            onChange={e => setUser(
                                prev => ({
                                    ...prev,
                                    password: e.target.value
                                }))}
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
                            toggleMask />
                        <div id="emailHelp" style={{ color: error.password ? "#f03f20" : "" }} className="form-text notify">{notify.password}</div>
                    </div>
                    <div className="mb-3">
                        <Password
                            style={{ width: "100%" }}
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
                            toggleMask
                            feedback={false} />
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