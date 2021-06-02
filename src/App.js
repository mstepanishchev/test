import "./App.css"
import { useEffects } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "./store/actions/api.action"

function App() {
  const dispatch = useDispatch()
  const { gallery } = useSelector(state => state)
  // useEffects(() => {
  //   dispatch(fetchData)
  // }, [])
  console.log(gallery)
  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  )
}

export default App
