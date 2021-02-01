/**
 * @description login page
 * @author Uni
 */

import React from 'react';
import { Button } from 'antd';
import { useAuth, useUpdateRender } from '../hooks';




const handleLogin = (auth, cb) => {
    auth.signin()
    cb()
}

function Login() {
    const auth = useAuth()
    const history = useUpdateRender()
    
    return (
        <Button onClick={handleLogin.bind(this, auth, history)}>Login</Button>
    )
}

export default Login