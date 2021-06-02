import { ApiTypes } from "../types"

export const initState = {
  loaded: false,
  loading: false,
}

const ApiReducer = (state = initState, action) => {
  switch (action.type) {
    case ApiTypes.LOADED_DATA: {
      return { ...state, loaded: action.payload.loaded }
    }
    case ApiTypes.LOADING_DATA: {
      return { ...state, loading: action.payload.loading }
    }
    default:
      return state
  }
}

export default ApiReducer
