import { Link } from "react-router-dom";

function LinkContainer() {
    return ( 
        <>
            <nav className="linkContainer">
                <Link to='/contact'>Contact Us</Link>
                <Link to='/about'>About</Link>
                <Link to='/puppies'>Puppies</Link>
                <Link to='/adoption'>Adoption Process</Link>
                <Link to='/product'>Products</Link>
            </nav>
        </>
    );
}

export default LinkContainer;