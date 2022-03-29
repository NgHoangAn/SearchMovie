import React from 'react'
import ReactPlayer from 'react-player'
import { VscMute, VscUnMute } from 'react-icons/vsc';
import styledComponents from 'styled-components';
function Intro(props) {
  return (
    <INtroContainer>
        <ReactPlayer 
            className="videoIntro"
            playing={true}
            width="100%"
            height="100%"
            volumn={1}
            loop={true}
            mute={false}
            url="https://vimeo.com/591652085"
        />
        <div className="intro">
            <h1 className="headingIntro">Netflix Elite</h1>
            <p className="overviewIntro">loren isomf dfvng english basic skill jascrips sdk dfnvn</p>
        </div>
        <VscMute/>
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
`