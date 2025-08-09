import { useState } from "react";
import { Link } from "react-router-dom";
import LinkContainer from "./LinkContainer";
import HamburgerButton from "./HamburgerButton";

function NavBar() {
    const [toggle, setToggle] = useState(true)

    return (
        <>
            <div className="navbarContainer">
                <h1>
                    <Link to='/'>Willow Springs</Link>
                </h1>
                <div className="mobileQuery">
                    <HamburgerButton 
                        toggle={toggle} 
                        setToggle={setToggle} 
                    />
                </div>
                <div className="wideQuery">
                    <LinkContainer />
                </div>
            </div>
        </>
    );
}

export default NavBar;