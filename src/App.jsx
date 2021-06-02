import "./App.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "./store/actions/api.actions"
import { setData } from "./store/actions/gallery.actions"
import Gallery from "./components/Gallery"

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.gallery)

  useEffect(() => {
    dispatch(
      fetchData({
        url: "https://api.instantwebtools.net/v1/passenger?page=0&size=10",
        method: "GET",
        onSuccess: setData,
      })
    )
  }, [dispatch])
  return (
    <div className="App">
      <Gallery photos={data} />
    </div>
  )
}

export default App
