import "./App.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "./store/actions/api.actions"
import { setData } from "./store/actions/gallery.actions"
import Gallery from "./components/Gallery"
import Paginator from "./components/Paginator"

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.gallery)
  const [currentState, setCurrentState] = useState(data)
  const [pagesState, setPagesState] = useState(currentState)
  const [currentPage, setCurrentPage] = useState(1)
  const [step, _] = useState(10)
  const [portionCount, setPortionCount] = useState(1)
  const [limit, setLimit] = useState(50)

  const totalItemsCount = data?.length
  const indexOfLastRow = currentPage * step
  const indexOfFirstRow = indexOfLastRow - step
  const digitsCount = limit / step

  useEffect(() => {
    setPagesState(data?.slice(indexOfFirstRow, indexOfLastRow))
  }, [currentPage, currentState])

  useEffect(() => {
    const onSuccessCustom = ({ data }) => {
      dispatch(setData(data))
      setCurrentState(data)
      setCurrentPage(portionCount * digitsCount - digitsCount + 1)
    }

    if ((portionCount - 1) * limit < totalItemsCount) {
      setCurrentPage(portionCount * digitsCount - digitsCount + 1)
    }

    if ((portionCount - 1) * limit === totalItemsCount) {
      console.log("dasdadadadas0000000000000000000000000")
      dispatch(
        fetchData({
          url: `https://api.instantwebtools.net/v1/passenger?page=${
            portionCount - 1
          }&size=${limit}`,
          method: "GET",
          onSuccessCustom: onSuccessCustom,
        })
      )
    }
  }, [dispatch, portionCount])

  return (
    <div className="App">
      <Gallery photos={pagesState} />
      <Paginator
        digitsCount={digitsCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        portionCount={portionCount}
        setPortionCount={setPortionCount}
      />
    </div>
  )
}

export default App
