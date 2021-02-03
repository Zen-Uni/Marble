import React from 'react';
import { useAuth, useUpdateRender } from '../hooks';
import { Button } from 'antd';


const handleSignOut = (auth, cb) => {
    window.localStorage.removeItem('marble-config')
    auth.signout()
    cb()
}

function TestSignOut() {
    const auth = useAuth()
    const history = useUpdateRender()

    return (
        <Button onClick={handleSignOut.bind(this, auth, history)}>Sign out</Button>
    )
}

export default TestSignOut