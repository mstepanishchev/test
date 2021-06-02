import agent from "../../utils/agent"
import { ApiTypes } from "../types"

export function fetchData({
  url,
  method,
  data,
  onSuccess,
  onSuccessCustom,
  onFailure,
  onFailureCustom,
  headers,
}) {
  return dispatch => {
    dispatch(setLoading(true))
    dispatch(setLoaded(false))
    agent({
      url,
      method,
      headers,
      data,
    })
      .then(({ data }) => {
        dispatch(setLoaded(true))
        if (onSuccessCustom) {
          onSuccessCustom(data)
          return
        }
        if (onSuccess) {
          dispatch(onSuccess(data))
        }
      })
      .catch(err => {
        const message = err.response.data?.message
          ? err.response.data.message
          : err.response.data.error
        if (onFailure) {
          dispatch(onFailure(message))
        }
        if (onFailureCustom) {
          onFailureCustom()
        }
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export const setLoading = loading => ({
  type: ApiTypes.LOADING_DATA,
  payload: { loading },
})

export const setLoaded = loaded => ({
  type: ApiTypes.LOADED_DATA,
  payload: { loaded },
})
