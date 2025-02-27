import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"



const NavBar = () => {
  const {isAuth} = useSelector ((state)=> state.user)
  const dispatch = useDispatch()
  return (
    
    <div >
   <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid className='navbar'>
        <Navbar.Brand href="/" className='name' > K A R H A B T Y </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
            {isAuth ? (
              <>
              <Nav.Link><Link style ={{textDecoration:"none", color:"black"}} to="/Products">Products</Link></Nav.Link>
            <button onClick={()=>dispatch(logout())}>logout</button>
            </>
            ) : 
            <div className='navi'> <Nav.Link><Link style ={{textDecoration:"none", color:"black"}}to="/login">Login</Link></Nav.Link> 
            <Nav.Link><Link style ={{textDecoration:"none", color:"black"}}to="/register">Register</Link></Nav.Link>
            <Nav.Link><Link style ={{textDecoration:"none", color:"black"}}to="/Products">Products</Link></Nav.Link>
            <Nav.Link><Link style ={{textDecoration:"none", color:"black"}}to="/contact">Contact</Link></Nav.Link></div>

            }
          </Nav>
          <form class="search-box">
  <input type="text" placeholder=" "/>
  <button type="reset"></button>
</form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar