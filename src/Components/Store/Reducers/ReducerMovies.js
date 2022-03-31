import { GET_NETFLIT_ORIGINALS } from "../type"

const initialState = {
    NeflitOriginal: null,
}

const reducerMovies = (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_NETFLIT_ORIGINALS:
        return {...state, NeflitOriginal: payload }
  default:
    return state
  }
}

export default reducerMovies