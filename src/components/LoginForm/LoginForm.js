import React from 'react'

import './LoginForm.css'

const LoginForm = ({ email, password, handleChange, onSubmitForm, error }) => {
    return (
        <div className="container loginForm">
            <div className="row centered-form">
                <div className="col-xs-12">
                    <div className="panel panel-default form">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control  form"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                email={email}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <p className="text-danger">{error && `Login Failed user: ${error}`}</p>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                password={password}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-danger btn-block align-center"
                                    onClick={onSubmitForm}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm