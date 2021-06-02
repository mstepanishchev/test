import "./App.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "./store/actions/api.actions"
import { setData } from "./store/actions/gallery.actions"

function App() {
  const dispatch = useDispatch()
  const {
    gallery: { data },
  } = useSelector(state => state)
  useEffect(() => {
    dispatch(
      fetchData({
        url: "https://api.instantwebtools.net/v1/passenger?page=0&size=100",
        method: "GET",
        onSuccess: setData,
      })
    )
  }, [])
  console.log(data)
  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  )
}

export default App
