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