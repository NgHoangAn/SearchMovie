import * as Types from "../type"

const initialState = {
    NeflitOriginal: null,
    TrendingMovie: null,
    TopRatedMovie: null,
    ActionsMovie: null,
    ComedyMovie: null,
    HorrorMovie: null,
    DocumentMovie: null,
    RomanceMovie: null,
    MoviesDetail: null,
}

const reducerMovies = (state = initialState, { type, payload }) => {
  switch (type) {
      case Types.GET_NETFLIT_ORIGINALS:
        return {...state, NeflitOriginal: payload }
      case Types.GET_TRENDING_MOVIES:
        return {...state, TrendingMovie: payload }

      case Types.GET_TOPRATED_MOVIES:
        return {...state, TopRatedMovie: payload }

      case Types.GET_ACTIONS_MOVIES:
        return {...state, ActionsMovie: payload }

      case Types.GET_COMEDY_MOVIES:
        return {...state, ComedyMovie: payload }

      case Types.GET_HORROR_MOVIES:
        return {...state, HorrorMovie: payload }

      case Types.GET_DOCUMENT_MOVIES:
          return {...state, DocumentMovie: payload }

      case Types.GET_ROMANCE_MOVIES:
          return {...state, RomanceMovie: payload }
      case Types.SET_MOVIE_DETAIL:
          return {...state, MoviesDetail: payload }
    default:
    return state
  }
}

export default reducerMovies