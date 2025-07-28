function HomePage() {

    return ( 
        <>
            <div className="homepageContainer">
                {/* will all be variables to change with admin section */}
                <div className="homepageHeaderContainer">
                    <div className="headerWrapper">
                        <h1>Welcome to Willow Springs</h1>
                        <button>View Puppies</button>
                    </div>
                    <div className="gradientOverlay"></div>
                    <img src="/public/images/aiPuppy.jpg" alt="" />
                </div>
                <p>Something creative for trust love and something else cute or something bla bla bla bla</p>
                <button>See Avaliable Pups</button>
            </div>
        </>
    );
}

export default HomePage;