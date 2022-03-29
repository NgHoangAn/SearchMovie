import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { VscMute, VscUnmute } from 'react-icons/vsc';
import styledComponents from 'styled-components';
import trailer  from '../../assets/video/Money-heist-ss5.mp4'
function Intro(props) {
    const [isMute, setIsMute] = useState(true)
  return (
    <INtroContainer>
        <ReactPlayer 
            className="videoIntro"
            playing={true}
            width="100%"
            height="100%"
            volumn={1}
            loop={true}
            muted={isMute}
            url={trailer}
        />
        <div className="intro">
            <h1 className="headingIntro">Netflix Elite</h1>
            <p className="overviewIntro">loren isomf dfvng english basic skill jascrips sdk dfnvn</p>
        </div>
        {
            isMute ? (
                <VscMute className="btnVolume" 
                    onClick = {() => setIsMute(prew=>!prew)}/>
            ) : (
                <VscUnmute className="btnVolume" 
                    onClick = {() => setIsMute(prew=>!prew)}/>
                )
        }
        <div className="fadeIntroVideo"></div>
    </INtroContainer>
  )
}

export default Intro

const INtroContainer = styledComponents.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 56%;
    .videoIntro{
        position: absolute;
        top: 0;
        left: 0;
    }
    .intro{
        position: absolute;
        top: 140px;
        left: 30px;
        @media screen and (max-width: 800px){
            top: 120px;
            left: 25px;
        }
        @media screen and (max-width: 600px){
            top: 100px;
            left: 15px;
        }
        .headingIntro{
            font-size: 60px;
            transition: all 0.3s ease;
            @media screen and (max-width: 800px){
                font-size: 40px;
            }
            @media screen and (max-width: 600px){
                font-size: 24px;
            }
        }
        .overviewIntro{
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;
            @media screen and (max-width: 800px){
                font-size: 16px;
            }
            @media screen and (max-width: 600px){
                font-size: 14px;
            }
        }
    }
    .btnVolume{
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: 1px #fff solid;
        transition: all 0.3s ease;
        transform: scale(1);
        &:hover{
            color: #fff;
            transform: scale(1.2);
            background-color: rgba(255,211,211,0.18);
        }
        @media screen and (max-width: 800px){
            height: 30px;
            width: 30px;
            padding: 4px;
        }
        @media screen and (max-width: 600px){
            height: 20px;
            width: 20px;
            padding: 1px;
        }
    }
    .fadeIntroVideo{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15,15,15,0.6) 40%,
            rgb(17,17,17)
        )
    }
`