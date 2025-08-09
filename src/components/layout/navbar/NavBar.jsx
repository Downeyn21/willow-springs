import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkContainer from "./LinkContainer";
import HamburgerButton from "./HamburgerButton";

function NavBar() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (toggle) {
            console.log('toggle on');
        } else {
            console.log('toggle off');
        }
    }, [toggle])

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
                    {toggle && <LinkContainer />}
                </div>
                <div className="wideQuery">
                    <LinkContainer />
                </div>
            </div>
        </>
    );
}

export default NavBar;