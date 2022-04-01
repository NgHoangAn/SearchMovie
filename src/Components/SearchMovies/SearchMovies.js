import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styledComponents from 'styled-components'
import { useViewport } from '../hooks'
import { getSearchMovie, setMovieDetail } from '../Store/actions';


const useQuery = () => new URLSearchParams(useLocation().search)
function SearchMovies() {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const { SearchMovies } = useSelector(state => state.infoMovies);
    const keywords = useQuery().get('keywords');
    useEffect(() => {
        if(keywords) dispatch(getSearchMovie(keywords));
    },[keywords,dispatch])
    
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
                    }else{return null}
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