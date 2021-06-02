import { GET_PHOTOS } from "../types/gallery.types"

const galleryReducer = (state = { a: 1 }, action) => {
  switch (action.type) {
    case GET_PHOTOS: {
      return {}
    }

    default:
      return state
  }
}

export default galleryReducer
