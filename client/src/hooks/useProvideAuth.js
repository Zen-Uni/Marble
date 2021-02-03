/**
 * @description provide auth context value
 * @author Uni
 */

import React, { useState } from 'react';


function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    const [email, setEmail] = useState(null)

    const signin = config => {
        const { username, email } = config
        setAuth(true)
        setUser(username)
        setEmail(email)
    }

    const signout = () => {
        setAuth(false)
        setUser(null)
        setEmail(null)
    }

    return {
        user,
        auth,
        signout,
        signin,
    }
}


export default useProvideAuth