import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Service from '../component/Service/Service'
import Header from '../Layout/Header/Header'
import Error from'../common/PageNotFound/Error'
import Footer from '../Layout/Footer/Footer'
import Item from '../component/Item/AllItem'
import SubItem from '../component/Item/SubItem/SubItem'
import Details from '../component/Item/SubItem/Details/Details' 

function Routing() {
  return (
    <Router>
      <Header/>
        <Routes>
            {/* Default setup */}
            <Route path="" element={<Home/>} />
            <Route path='About/:username' element={<About/>}></Route>
            <Route path='Service' element={<Service/>}></Route>

            <Route path='item' element={<Item/>}></Route>
            <Route path='item/sub-item/:subname' element={<SubItem/>}></Route>
            <Route path='item/sub-item/:subname/details/:data' element={<Details/>}></Route>

              {/* 404 */}
              <Route path="*" element={<Error/>}/>
        </Routes>
      <Footer/>
    </Router>
    
  )
}

export default Routing