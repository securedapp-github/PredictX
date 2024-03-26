import { Button, Navbar } from "flowbite-react";
import Predctx from '../Images/Predctx.png';

function NavBar() {
  return (
      <Navbar>
        <Navbar.Brand className="z-50">
          <img src={Predctx} className="ml-10 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color='blue' className="mr-10 rounded-lg bg-blue-800 z-50">Sign in</Button>
          <Navbar.Toggle  className="z-50 text-white bg-blue-600  focus:outline-none active:outline-none focus:bg-blue-600"/>
        </div>
        <Navbar.Collapse className="z-50 border-none">
          <Navbar.Link href="#" className="z-50 text-black text-md border-none font-semibold hover:text-blue-800" style={{ transition: 'color 0.2s', color: 'black' }} onMouseOver={(e) => e.target.style.color = 'blue'} onMouseOut={(e) => e.target.style.color = 'black'}>Home</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md border-none font-semibold hover:text-blue-800" style={{ transition: 'color 0.2s', color: 'black' }} onMouseOver={(e) => e.target.style.color = 'blue'} onMouseOut={(e) => e.target.style.color = 'black'}>Map</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md border-none font-semibold hover:text-blue-800" style={{ transition: 'color 0.2s', color: 'black' }} onMouseOver={(e) => e.target.style.color = 'blue'} onMouseOut={(e) => e.target.style.color = 'black'}>Profile</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md border-none font-semibold hover:text-blue-800" style={{ transition: 'color 0.2s', color: 'black' }} onMouseOver={(e) => e.target.style.color = 'blue'} onMouseOut={(e) => e.target.style.color = 'black'}>Crime</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md border-none font-semibold hover:text-blue-800" style={{ transition: 'color 0.2s', color: 'black' }} onMouseOver={(e) => e.target.style.color = 'blue'} onMouseOut={(e) => e.target.style.color = 'black'}>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default NavBar;