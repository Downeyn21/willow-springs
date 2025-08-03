function HomePage() {
    const puppyList = [
        {
            name: 'Joe',
            img: "/public/images/testPuppies/pup1.jpg", 
            breed: 'Lab', 
            age: '8 weeks'
        },
        {
            name: 'Josiah',
            img: "/public/images/testPuppies/pup2.jpg", 
            breed: 'Lab', 
            age: '9 weeks'
        },
        {
            name: 'Jacob',
            img: "/public/images/testPuppies/pup3.jpg", 
            breed: 'Lab', 
            age: '8 weeks'
        },
        {
            name: 'Joesph',
            img: "/public/images/testPuppies/pup4.jpg", 
            breed: 'Lab', 
            age: '12 weeks'
        },
        {
            name: 'Joe',
            img: "/public/images/testPuppies/bigPup.jpg", 
            breed: 'Lab', 
            age: '12 weeks'
        },
        
    ]

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
                <div className="homepagePuppiesContainer">
                    <h3>Avaliable Puppies</h3>
                    <div className="homepagePuppiesWrapper">
                        {puppyList.map((puppy, index) => (
                            <div key={index} className="PupSingle">
                                <img src={puppy.img} alt="" />
                                <h1>{puppy.name}</h1>
                                <div>{puppy.age}</div>
                                <div>{puppy.breed}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="homepageLowerContainer">
                    <div className="miniAboutusWrapper">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium provident eveniet labore obcaecati veritatis cumque tempora reiciendis cupiditate unde, optio totam ipsam consequatur quaerat atque? Ducimus exercitationem at ex.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fuga accusamus iste, dolore magni, fugiat ad impedit nulla voluptate reprehenderit officia doloribus, iusto sapiente tempora! Fugiat nesciunt voluptatem explicabo ad?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;