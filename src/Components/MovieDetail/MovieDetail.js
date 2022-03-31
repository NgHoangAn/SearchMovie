import React from 'react'
import styledComponents from 'styled-components'
import { keyframes } from 'styled-components';

const showModal = true;
function MovieDetail() {
  return (
    <MovieDetailModal>
        <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`} ></div>
            <div 
                className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
                style={{
                    backgroundImage: `url(https://vcdn-giaitri.vnecdn.net/2022/03/22/the-witcher-9901-1639974315-1166-1647916691.jpg)`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="container">
                    <div className="movieInfo">
                        <h1 className="movieTitle">The Witches</h1>
                        <p className="statistical">
                            <span className="rating">Rating: 82%</span>
                            <span className="popularity">Popularity: 123.456</span>
                        </p>
                        <p className="releaseDate">Release Date: 21/12/2021</p>
                        <p className="runtime">Runtime: m</p>
                        <p className="overview">Release Date</p>
                    </div>
                </div>
            </div>
    </MovieDetailModal>
  )
}

export default MovieDetail
const fadeIn = keyframes`
    0%: { background: rgba(0,0,0,0)}
    100%: { background: rgba(0,0,0,0.6)}
`
const MovieDetailModal = styledComponents.div`
    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index:50;
        background-color: rgba(0,0,0,0.6);
        animation: ${fadeIn} 1s cubic-bezier(0.17,0.85,0.45,1) forwards;
    }
    .showBackdrop{
        display: block;
    }
    .hideBackdrop{display:none;}
    .modal{
        position: fixed;
        top: 25%;
        left: 0;
        z-index:200;
        height: 60%;
        width: 100%;
        margin: 0 auto;
        color: var(--color-white);
        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
        transition: all 0.3s ease;
        @media screen and (max-width: 1184px) {
            hight: 70%;
        }
        @media screen and (max-width: 600px) {
            height: 80%;
        }
        .container{
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0,0,0,.94), 60%, transparent);
            @media screen and (max-width: 1184px) {
                background: linear-gradient(90deg, rgba(0,0,0,.95),rgba(0,0,0,.733), 40%, transparent);
                widtht: 88%;
            }
            @media screen and (max-width: 980px) {
                background: linear-gradient(90deg, rgba(0,0,0,.95), 50%, transparent);
                widtht: 100%;
            }
            @media screen and (max-width: 600px) {
                background: linear-gradient(90deg, rgba(0,0,0,.88), 60%, transparent);

            }
            .movieInfo{
                width: 65%;
                height: 100%;
                padding-left:24px;
                color: var(--color-white);
                font-size: 20px;
                padding-top: 30px;
                @media screen and (max-width: 600px) {
                    font-size: 16px;
                    width: 80%;
                }
                .movieTitle{
                    margin-top: 30px;
                }
                .statistical {
                    margin-top: 20px;
                    display: flex;
                    .rating{
                        color: var(--color-green);
                    }
                    .popularity {
                        color: yellow;
                        margin-left: 12px;
                    }
                }
                .releaseDate, .runtime{
                    margin-top: 12px;

                }
                .overview{
                    margin-top: 20px;
                    color: rgba(255,255,255,0.6);
                    line-height: 1.4;
                    font-size: 18px;
                    @media screen and (max-width: 600px){
                        font-size: 14px;
                    }
                }
            }
        }
        
    }
    .showModal{
        top:25%;
        opacity: 1;
        left: 0;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }
    .hideModal{
        top:0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
    }
`