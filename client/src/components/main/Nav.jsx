/**
 * @description main page header component
 * @author Uni
 */

import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { itemChecked, logoClicked } from '../../state/action'

import { Link } from 'react-router-dom'

// import component's style
import {
    NavWrapper
} from '../../style/main/nav'

function Nav(props) {

    // inject props
    const {
        navData,
        handleItemClick,
        handleClickLogo
    } = props
    
    return (
        <NavWrapper>
            <Link to="/main">
                <div className="nav-logo" onClick={handleClickLogo}>
                    <i className="icon-M iconfont"></i>
                </div>
            </Link>
            <div className="nav-item-box">
                {
                    navData.map(data => {
                        return (
                            <Link to={data.path} key={data.index}>
                                <div className={"nav-item " + data.checked}  onClick={handleItemClick.bind(this, data.index)}>
                                    <i className={'iconfont '+ data.icon}></i>
                                    <span>{data.item}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </NavWrapper>
    )
}


const stateToProps = state => {
    return {
        navData: state.nav
    }
}

const dispatchToProps = dispatch => {
    return {
        handleItemClick(index) {
            const action = itemChecked(index)
            dispatch(action)
        },
        handleClickLogo() {
            const action = logoClicked()
            dispatch(action)
        }
    }
}


export default connect(stateToProps, dispatchToProps)(Nav)

