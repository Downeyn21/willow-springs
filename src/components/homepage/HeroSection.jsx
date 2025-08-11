function HeroSection() {
    return (  
        <>
            <div className="homepageHeroContainer">
                    <div className="headerWrapper">
                        <h1>Welcome to Willow Springs</h1>
                        <button>View Puppies</button>
                    </div>
                    <div className="colorOverlay"></div>
                    <img src="/public/images/aiPuppy.jpg" alt="" />
            </div>
        </>
    );
}

export default HeroSection;