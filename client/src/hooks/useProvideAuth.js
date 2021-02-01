/**
 * @description provide auth context value
 * @author Uni
 */

import React, { useState } from 'react';


function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)

    const signin = () => {
        setAuth(true)
        setUser('Uni')
    }

    const signout = () => {
        setAuth(false)
    }

    return {
        user,
        auth,
        signout,
        signin,
    }
}


export default useProvideAuth