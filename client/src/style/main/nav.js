/**
 * @description main page header component's style
 * @author Uni
 */

import styled from 'styled-components'

export const NavWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 65px;
    background-color: rgb(247, 243, 238);
    float: left;
    border:0 0.5px 0 0 solid #f8f8f8;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .6);
    
    & .nav-logo {
        height: 50px;
        width: 50px;
        margin: 20px auto;
        text-align: center;
        line-height: 50px;
        
        &:hover {
            cursor: pointer;
        }

        & i {
            font-size: 40px;
            color: rgb(234, 145, 124)
        }
    }

    & .nav-item-box {
        position: relative;
        width: 80%;
        /* height: 30%; */
        /* background-color: black; */
        margin: 40px auto;
        box-sizing: border-box;
        
        & .nav-item {
            position: relative;
            height: 50px;
            width: 100%;
            margin: 15px auto;
            border-radius: 10px;
            text-align: center;
            color: rgb(234, 145, 124);
            font-weight: 600;
            display: flex;
            flex-direction: column;
            transition: all .4s ease;
            & i {
                font-size: 20px;
            }
            & span {
                font-size: 12px;
            }


            &:hover {
                background-color: white;
                cursor: pointer;
            }

            &.nav-item-clicked {
                background-color: white;
            }
        }
    }
`
