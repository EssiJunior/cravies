// REACT IMPORTS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// LAYOUT
import Layout from './Layouts'

// PAGES
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
