import './App.css'

// import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart'
import Home from './pages/home'
import Header from './header/header'
import NotFound from './pages/notFound'


// export const searchContext =  createContext();

function App() {
  // const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container ">
      {/* <searchContext.Provider value={{searchValue,setSearchValue}}> */}
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      {/* </searchContext.Provider> */}
    </div>
  )
}
export default App
