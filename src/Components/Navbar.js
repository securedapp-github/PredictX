import { Button, Navbar } from "flowbite-react";
import Predctx from '../Images/Predctx.png';

function NavBar(props) {
  return (
    <div style={props.style}>
      <Navbar className="">
        <Navbar.Brand className="z-50">
          <img src={Predctx} className="ml-10 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color='blue' className="mr-10 rounded-lg bg-blue-800 z-50">Sign in</Button>
          <Navbar.Toggle  className="z-50 text-white bg-transparent active:bg-transparent focus:outline-none active:outline-none focus:bg-transparent"/>
        </div>
        <Navbar.Collapse className="z-50">
          <Navbar.Link href="#" className="z-50 text-black text-md font-semibold">Home</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md font-semibold">Map</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md font-semibold">Profile</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md font-semibold">Crime</Navbar.Link>
          <Navbar.Link href="#" className="z-50 text-black text-md font-semibold">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;