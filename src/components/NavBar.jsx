import { Link } from "react-router-dom";

function NavBar() {

    return ( 
        <>
            <div className="navbarContainer">
                <h1>
                    <Link to='/'>Willow Springs</Link>
                </h1>
                {/* <div className="NavbarSpacer"></div> */}
                <nav className="navbarContentWrapper">
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/puppies'>Puppies</Link>
                    <Link to='/adoption'>Adoption Process</Link>
                    <Link to='/product'>Products</Link>
                </nav>
            </div>
        </>
    );
}

export default NavBar;