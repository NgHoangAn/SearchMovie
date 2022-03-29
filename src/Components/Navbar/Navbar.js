import React from 'react'
import logo from '../../assets/images/logo.png'
import { MdSearch } from 'react-icons/md';
import styledComponents from 'styled-components';
function Navbar(props) {
  return (
    <Navigation>
        <div className="navContainer">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navSearch">
                <MdSearch className="iconSearch"/>
                <input type="text" placeholder="input...." />
            </div>
            
        </div>
    </Navigation>
  )
}

export default Navbar;

const Navigation = styledComponents.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 1;
    @media only screen and (max-width: 600px){
        height: 100px;
    }
    .navContainer{
        background-color: var(--color-background);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        height: 100%;
        @media only screen and(max-width: 600px){
            flex-direction: column;
            height: 100px;
        }
        .logo {
            width: 120px;
            cursor: pointer;
            img{
                width: 100%;
            }
        }
        .navSearch{
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;
            &:hover .iconSearch{
                color: white;
            }
            .iconSearch{
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }
            input{
                font-size: 14px;
                border: 1px solid #fff;
                color: var(--color-white);
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background-color: var(--color-background);
                transition: width 0.5s;
                &:focus{
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }
`