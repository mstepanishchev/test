import { applyMiddleware, combineReducers, createStore } from "redux"
import galleryReducer from "./reducers/gallery"
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
  gallery: galleryReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
