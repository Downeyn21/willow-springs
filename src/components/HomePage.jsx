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
                <div className="homepageSubHeaderContainer">
                    <h2>
                        Home-raised, health-tested puppies with great temperaments.
                    </h2>
                </div>
                <div className="miniAboutusContainer">
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium provident eveniet labore obcaecati veritatis cumque tempora reiciendis cupiditate unde, optio totam ipsam consequatur quaerat atque? Ducimus exercitationem at ex.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fuga accusamus iste, dolore magni, fugiat ad impedit nulla voluptate reprehenderit officia doloribus, iusto sapiente tempora! Fugiat nesciunt voluptatem explicabo ad?
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomePage;