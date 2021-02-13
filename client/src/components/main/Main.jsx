/**
 * @description main page
 * @author Uni
 */

import { message } from 'antd';
import React, { useEffect } from 'react';
import { setReqToken, useUpdateRender } from '../../hooks';

// import components
import Nav from './Nav'

// import style components
import { ContentWrapper } from '../../style/main/content'

function Main(props) {
    const history = useUpdateRender()
    // TODO: 整理主页逻辑
    useEffect(() => {
        const token = window.localStorage.getItem('marble-config')
        if (token) {
            setReqToken()
            message.success('登录成功')
        } else {
            console.log('???')
            history()
        }
    }, [])

    return (
        <ContentWrapper>
            <Nav/>
            {
                props.children
            }
        </ContentWrapper>
    )
}

export default Main