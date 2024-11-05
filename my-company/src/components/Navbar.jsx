import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
   <div style={{backgroundColor:'grey', display:"flex", justifyContent:"center"}}>
     <Link to="/"/>
     <Link to="/contact"/>
     <Link to="/about"/>
     <Link to="/services"/>
   </div>
  )
}

export default Navbar
