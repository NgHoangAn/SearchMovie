import React, { useEffect, useRef, useState } from 'react'
import styledComponents from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SmoothHorizontalScrolling } from '../../utils' 
import { useViewport } from '../hooks/useViewport';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../Store/actions';
function MoviesRow(props) {
    const sliderRef = useRef();
    const movieRef = useRef();
    const {movies, title, isNetflix, idSection} = props;
    const [dragDown, setDragDown] = useState(0)
    const [dragMove, setDragMove] = useState(0)
    const [isDrag, setIsDrag] = useState(false)
    const [windowWidth] = useViewport();
       // console.log(sliderRef.current.scrollWidth);
    const dispatch = useDispatch();
    
    const handleScrollRight = () => {
        const maxScrollWidth = sliderRef.current.scrollWidth;
    const clientScrollWidth = sliderRef.current.clientWidth;
    const currScrollLeft = sliderRef.current.scrollLeft;
        const scrollWidthLeft = maxScrollWidth - clientScrollWidth;
       //console.log(maxScrollLeft);
       if(currScrollLeft < scrollWidthLeft){
           SmoothHorizontalScrolling(
               sliderRef.current, 
               250, 
               movieRef.current.clientWidth * 2,//move 2 step 
               currScrollLeft)
       }
    }
    const handleScrollLeft = () => {
        const currScrollLeft = sliderRef.current.scrollLeft;
       if(currScrollLeft > 0){
           SmoothHorizontalScrolling(
               sliderRef.current, 
               250, 
               -movieRef.current.clientWidth * 2,//move 2 step 
               currScrollLeft)
       }
    }
    const handleSetMovie = (movieId) => {
        //console.log(movieId)
        dispatch(setMovieDetail(movieId));
    }
    useEffect(() =>{
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            if(dragMove > dragDown) handleScrollLeft();
        }
    },[dragDown,dragMove,isDrag])
    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    }
    const onDragEnd = e => {
        setIsDrag(false);
    }
    const onDragEnter = e => {
        setDragMove(e.screenX);
    }
  return (
    <ContentsContainer draggable='false' id={idSection}>
        <h1 className="headingContents" >{title}</h1>
        <MoviesSlider 
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            ref={sliderRef} 
            draggable='true'
            style = {
                movies && movies.length > 0 
                ? {
                    gridTemplateColumns: `repeat(${movies.length},
                        ${windowWidth > 1200 ? '360px' 
                            : windowWidth > 992 ? '300px'
                            : windowWidth > 768 ? '250px'
                            : '200px'
                        })`
                } : {}
            }>
            {
                movies && movies.length > 0 && movies.map((movie, index) => {
                    if(movie.poster_path && movie.backdrop_path !== null){
                        let imageUrl = isNetflix ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        return(
                            <div 
                                key={index} 
                                className="movieItem" 
                                ref={movieRef} 
                                draggable='false'
                                onClick={() => handleSetMovie(movie.id)}
                            >
                                <img src={imageUrl} alt="" draggable='false'/>
                                <div className="movieName">{movie.title || movie.name}</div>
                            </div>
                        )
                    } else{
                        return null;
                    }
                }  
                )
            }

        </MoviesSlider>
        <div className={`btnLeft ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}>
            <FiChevronLeft />
        </div>
        <div className={`btnRight ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}><FiChevronRight/></div>
    </ContentsContainer>
  )
}

export default MoviesRow

const ContentsContainer = styledComponents.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;
    .headingContents{
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
        height: 50px;
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
        &.isNetflix{
            height: 100px;
            width: max-content;
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
        height: 50px;
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
            
        }&.isNetflix{
            height: 100px;
            width: max-content;
        }
    }

`
const MoviesSlider = styledComponents.div`
    display: grid;
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