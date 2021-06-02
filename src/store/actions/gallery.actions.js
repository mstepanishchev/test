import { GalleryTypes } from "../types"

export const setData = data => ({
  type: GalleryTypes.SET_DATA,
  payload: { data },
})
