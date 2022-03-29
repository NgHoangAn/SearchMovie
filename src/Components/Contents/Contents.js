import React from 'react'
import styledComponents from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const movies = [
    "https://cdnb.artstation.com/p/assets/images/images/017/317/689/large/toan-juno-final.jpg?1555483923",
    "https://upload.wikimedia.org/wikipedia/vi/d/df/Arrival%2C_Movie_Poster.jpg",
    "https://cdn-amz.fadoglobal.io/images/I/71OIhbUOF-L.jpg",
    "https://upload.wikimedia.org/wikipedia/vi/f/fe/1917_%282019%29_Film_Poster.jpeg",
    "https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/038/749/151/medium/nima-neemz-nakhshab-avengers.jpg?1623946339",
    "https://img.idesign.vn/2018/06/27/raw_percival-associates.jpg",
    "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
    "http://webneel.com/daily/sites/default/files/images/daily/04-2013/1-Casino-Jack-best-movie-poster.jpg",
    "https://i.pinimg.com/474x/ef/07/13/ef07138c0c4546fbb6507ebb975bb9cf--z-for-zachariah-indie-films.jpg",
    "https://i.pinimg.com/736x/66/80/87/6680870200ce78c6e920bc341a9f0dd2--movies-to-watch-new-movies.jpg",
]
function Contents(props) {
    
  return (
    <ContentsContainer>
        <h1 className="headingContent">Netflix Originals</h1>
        <MoviesSlider>
            {
                movies.map((movie, index) =>(
                    <div key={index} className="movieItem">
                        <img src={movie} alt="" />
                        <div className="movieName">Movie name</div>
                    </div>
                ))
            } 
        </MoviesSlider>
        <div className="btnLeft">
            <FiChevronLeft />
        </div>
        <div className="btnRight"><FiChevronRight/></div>
    </ContentsContainer>
  )
}

export default Contents

const ContentsContainer = styledComponents.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;
    .headingCOntents{
        font-size: 18px;
        user-select: none;
    }
    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 11;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,.5);
        height: 100px;
        width: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(0,0,0,0.8);

        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;

        }
    }
    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 11;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,.5);
        height: 100px;
        width: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(0,0,0,0.8);

        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
            
        }
    }

`
const MoviesSlider = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(${movies.length}, 300px);
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding: 28px 0;
    scroll-behavior: smooth;
    &:hover .movieItem{
        opacity: 0.5;
    }
    .movieItem{
        transform: scale(1);
        max-width:400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3 linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;
        &:hover{
            opacity: 1;
            transform: scale(1.1);
            z-index:10;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .movieName{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0,0,0,.65);

        }
    }
`