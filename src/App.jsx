import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import Puppies from './components/Puppies'
import Adoption from './components/Adoption'
import Products from './components/Products'

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
