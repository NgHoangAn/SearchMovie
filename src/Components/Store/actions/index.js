import axios from "axios";
import * as Types from "../type";
const API_LEY = 'd6b49a6b9b4713d97accba2cdaf07abf'
const BASE_URL = 'https://api.themoviedb.org/3';


export const getNetflixOriginals = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate`
        )
        dispatch({type: Types.GET_NETFLIT_ORIGINALS, payload: result.data.results})
    } catch(error){
        console.log('get poster error:',error);
    }
}
export const getTrendingMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_LEY}`
        )
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get trending error:',error);
    }
}
export const getTopRatedMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate`
        )
        dispatch({type: Types.GET_TOPRATED_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Rated error:',error);
    }
}
export const getActionMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate&with_genres=28`
        )
        dispatch({type: Types.GET_ACTIONS_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Rated error:',error);
    }
}
export const getComedyMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate&with_genres=35`
        )
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Rated error:',error);
    }
}
export const getHorrorMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate&with_genres=27`
        )
        dispatch({type: Types.GET_HORROR_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Rated error:',error);
    }
}
export const getRomanceMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate&with_genres=10749`
        )
        dispatch({type: Types.GET_ROMANCE_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Romance error:',error);
    }
}
export const getDOcumentMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_LEY}&page=2&with_watch_monetization_types=flatrate&with_genres=99`
        )
        dispatch({type: Types.GET_DOCUMENT_MOVIES, payload: result.data.results})
    } catch(error){
        console.log('get Top Document error:',error);
    }
}