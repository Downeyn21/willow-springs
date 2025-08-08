import { useState } from "react";
import { Link } from "react-router-dom";
import LinkContainer from "./LinkContainer";

function NavBar() {
    const [toggle, setToggle] = useState(true)

    return ( 
        <>
            <div className="navbarContainer">
                <h1>
                    <Link to='/'>Willow Springs</Link>
                </h1>
                <div className="mobileQuery">
                    <button 
                    className={toggle ? 'open' : ''}
                    onClick={() => {setToggle(!toggle)}}
                    aria-label="Toggle menu"
                >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="wideQuery">
                    <LinkContainer />
                </div>
            </div>
        </>
    );
}

export default NavBar;