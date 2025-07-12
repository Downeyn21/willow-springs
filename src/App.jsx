import { Routes, Route } from 'react-dom'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
