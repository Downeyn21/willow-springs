import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import Contact from './pages/Contact'
import About from './pages/About'
import Puppies from './pages/Puppies'
import Adoption from './pages/Adoption'
import Products from './pages/Products'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='puppies' element={<Puppies />} />
          <Route path='adoption' element={<Adoption />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
