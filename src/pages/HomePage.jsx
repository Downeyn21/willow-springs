import HeroSection from "../components/homepage/HeroSection";
import PuppySlider from "../components/homepage/PuppySlider";
import MiniAbout from "../components/homepage/MiniAbout";

function HomePage() {
    

    return ( 
        <>
            <div className="homepageContainer">
                {/* will all be variables to change with admin section */}
                <HeroSection />
                <div className="homepageSubHeaderContainer">
                    <h2>
                        Home-raised, health-tested puppies with great temperaments.
                    </h2>
                </div>
                <PuppySlider />
                <MiniAbout />
            </div>
        </>
    );
}

export default HomePage;