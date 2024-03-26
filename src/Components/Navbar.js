import { Button, Navbar } from "flowbite-react";
import Predctx from '../Images/Predctx.png';

function MyNavbar() {
  return (
    <Navbar fluid  className="">
      <Navbar.Brand >
        <img src={Predctx} className="mr-3 h-6 sm:h-9" alt="Predctx" />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color='blue'>Sign in</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="#" >Home</Navbar.Link>
        <Navbar.Link href="#" >Map</Navbar.Link>
        <Navbar.Link href="#" >Profile</Navbar.Link>
        <Navbar.Link href="#" >Crime</Navbar.Link>
        <Navbar.Link href="#" >Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
} 
export default MyNavbar;