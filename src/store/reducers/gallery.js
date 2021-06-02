import { SET_DATA } from "../types/gallery.types"

const GalleryReducer = (state = { a: 1 }, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: action.payload.data,
      }
    }

    default:
      return state
  }
}

export default GalleryReducer
