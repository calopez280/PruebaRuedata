
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mx-3">Prueba</NavbarBrand>
        <NavbarToggler />        
      </Navbar>
    </div>
  );
}

export default NavBar;
