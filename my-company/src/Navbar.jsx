import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
   <div>
     <Link to="/"/>
     <Link to="/contact"/>
     <Link to="/about"/>
     <Link to="/services"/>
   </div>
  )
}

export default Navbar
