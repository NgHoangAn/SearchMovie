import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { MdSearch } from 'react-icons/md';
import styledComponents from 'styled-components';
import { useScrollY } from '../hooks'
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
    const [scrollY] = useScrollY();
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const handleChangInput = (e) => {
        let keuwords = e.target.value;
        setKeyword(keuwords);
        (keyword.length > 0) 
            ? navigate(`/search?keywords=${keyword.trim()}`)
            : navigate('/');
    }
    const goHome = () =>{
        navigate('/');
        setKeyword('');
    }
  return (
    <Navigation style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
        <div className="navContainer">
            <div className="logo" onClick={goHome}>
                <img src={logo} alt="" />
            </div>
            <div className="navSearch">
                <MdSearch className="iconSearch"/>
                <input onChange={handleChangInput} value={keyword} type="text" placeholder="input...." />
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
        background-color: transparent;
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