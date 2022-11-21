import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto h-[50px] items-center space-x-5 ">
          <Link to='/'>
            <Nav className='text-2xl text-gray-300  hover:translate-y-3'>Home</Nav>
            </Link>

            <Link to='/user'>
            <Nav className='text-2xl text-gray-300  hover:translate-y-3'>User</Nav>
            </Link>

            <Link to='/admin'>
            <Nav className='text-2xl text-gray-300  hover:translate-y-3'>Admin</Nav>
            </Link>

            <Link to='/productlist'>
            <Nav className='text-2xl text-gray-300  hover:translate-y-3'>Product List</Nav>
            </Link>

            <Link to='/checkout'>
            <Nav className='text-2xl text-gray-300  hover:translate-y-3'>CheckOut</Nav>
            </Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;