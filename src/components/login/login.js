import React from 'react';

const Login = () => {
    return (
        <>
            <div className="container-fluid text-center">
                <div className="container">
                    <h1 className="display-4">Login</h1>
                </div>
            </div>
            <div className="text-center">
                <span className="col-5">
                    Username
                </span>
                <span className="col-5">
                    <input type="text" />
                </span>
            </div>
        </>
    );
}

export default Login;