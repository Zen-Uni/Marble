import React, { useEffect } from 'react';
import { setReqToken, useUpdateRender } from '../../hooks';

import TestSignOut from '../TestSignOut'

function Main() {
    const history = useUpdateRender()

    useEffect(() => {
        const token = window.localStorage.getItem('marble-config')
        if (token) {
            setReqToken()
        } else {
            console.log('???')
            history()
        }
    }, [])

    return (
        <TestSignOut/>
    )
}

export default Main