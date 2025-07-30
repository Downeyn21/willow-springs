function NavBar() {
    return ( 
        <>
            <div className="navbarContainer">
                <h1>
                    Willow Springs
                </h1>
                {/* <div className="NavbarSpacer"></div> */}
                <nav className="navbarContentWrapper">
                    <a>About</a>
                    <a>Contact Me</a>
                    <a>Puppies</a>
                    <a>Adoption Process</a>
                    <a>Products</a>
                </nav>
            </div>
        </>
    );
}

export default NavBar;