import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [toggle, setToggle] = useState(true)

    function toggleChange() {
        setToggle(!toggle)
    }

    return ( 
        <>
            <div className="navbarContainer">
                <h1>
                    <Link to='/'>Willow Springs</Link>
                </h1>
                {/* <div className="NavbarSpacer"></div> */}
                <nav className="navbarContentWrapper">
                    <div className="">
                        <button onClick={toggleChange}>
                            ///
                        </button>
                        {toggle &&
                        <div>
                            <Link>test</Link>
                        </div>
                        }
                    </div>
                    <div className="mediaToggle">
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/puppies'>Puppies</Link>
                        <Link to='/adoption'>Adoption Process</Link>
                        <Link to='/product'>Products</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;