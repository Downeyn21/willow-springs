function HamburgerButton() {
    return ( 
        <>
            <button
                className={toggle ? 'open' : ''}
                onClick={() => {setToggle(!toggle)}}
                aria-label="Toggle menu"
            >
                <div></div>
                <div></div>
                <div></div>
            </button>
        </>
    );
}

export default HamburgerButton;