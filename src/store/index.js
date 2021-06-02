import { applyMiddleware, combineReducers, createStore } from "redux"
import GalleryReducer from "./reducers/gallery"
import ApiReducer from "./reducers/api"
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
  gallery: GalleryReducer,
  api: ApiReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
