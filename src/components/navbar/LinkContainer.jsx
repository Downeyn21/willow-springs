import { Link } from "react-router-dom";

function LinkContainer() {
    return ( 
        <>
            <div className="linkContainer">
                <nav>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/puppies'>Available
                    Puppies</Link>
                    <Link to='/adoption'>Adoption Process</Link>
                    <Link to='/product'>Our Products</Link>
                </nav>
            </div>
        </>
    );
}

export default LinkContainer;