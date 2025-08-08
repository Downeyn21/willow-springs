import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Layout from './components/layout/Layout'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Puppies from './components/pages/Puppies'
import Adoption from './components/pages/Adoption'
import Products from './components/pages/Products'

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
