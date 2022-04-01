import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styledComponents from 'styled-components'
import { useViewport } from '../hooks'
import { getSearchMovie, setMovieDetail } from '../Store/actions';

const moviesList =[
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
const useQuery = () => new URLSearchParams(useLocation().search)
function SearchMovies() {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const { SearchMovies } = useSelector(state => state.infoMovies);
    const keywords = useQuery().get('keywords');
    useEffect(() => {
        if(keywords) dispatch(getSearchMovie(keywords));
    },[keywords,dispatch])
    console.log(SearchMovies);
  return (
    <SearchPane>
        {
            SearchMovies && SearchMovies.length > 0 ? (
                <div className="searchContent"
            style={{
                gridTemplateColumns: `repeat(${
                    windowWidth > 1200 ? 5 :
                    windowWidth > 992 ? 4 :
                    windowWidth > 768 ? 3 :
                    windowWidth > 600 ? 2 : 1
                }, auto)`
            }}
        >
        {
            SearchMovies.map((movie,index)=>
                {
                    if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                        const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        return  (
                            <div key={index} className="movieItem" onClick={() => dispatch(setMovieDetail(movie.id))}>
                            <img src={imgUrl} alt={movie.title || movie.name} />
                            <span>{movie.title || movie.name}</span>
                            </div>
                        )
                    }
                }
            )
        }
        </div>
            ) : (
                <NotFound>
                    <h1>dnfdsjnfdnfjsndfjnfnsdjjnf</h1>
                </NotFound>
            )
        }
    </SearchPane>
  )
}

export default SearchMovies

const SearchPane = styledComponents.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--color-background);
    transition: all 0.3s linear;
    .searchContent{
        padding: 40px 60px;
        display: grid;
        gap: 8px;
        &:hover .movieItem{
            opacity: 0.5;
        }
        .movieItem{
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;
            &:hover{
                transform: scale(1.1);
                z-index: 10;
                opacity: 1;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                text-align: center;
                font-weight: bold;
                padding: 4px;
                background: rgba(0,0,0,.5);
                color: var(--color-white);
            }
        }
    }
`
const NotFound = styledComponents.div`
    color: var(--color-white);
`