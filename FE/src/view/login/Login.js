import React from 'react';
import "../../asset/style/login.css"
import { useState } from 'react';
import Logo from '../../asset/image/Focal Real.png'
import { Link } from 'react-router-dom';

function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        account: false,
        password: false
    })
    const [notify, setNotify] = useState({
        account: "We'll never share your email with anyone else",
        password: ""
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
                account: "Please enter a password"
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
        return check
    }

    const handleSubmit = () => {
        if (validate()) {
            console.log("submit thnah cong")
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
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password}
                            autoComplete="new-password"
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
                    <div className="login__submit">
                        <button onClick={handleSubmit} className="btn btn-primary btn-submit">Submit</button>
                        <Link className='btn-register' to="/register">
                            <button style={{width: "100%"}} className="btn btn-primary">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
            <span style={{ color: "#fff", bottom: 30, left: 20, position: "fixed" }}>&copy;votrungkien</span>
            {/* <iframe style={{border:0, width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
        </div>
    )
}
export default Login