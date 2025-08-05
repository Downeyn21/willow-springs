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
                        <h3>ABOUT</h3>
                        <div className="aboutSectionRight">
                            <img src="/public/images/person-n-dog.jpg" alt="person and dog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores odio debitis accusantium quia sunt dolorem ratione veritatis, maxime, est maiores, quis possimus architecto quas magnam eveniet tempora eos impedit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem consequatur deserunt nemo, labore neque, recusandae exercitationem itaque ipsum dolores rem illum? Ipsam voluptas reiciendis fugit magnam nemo ullam eaque.
                            </p>
                        </div>
                        <div className="aboutSectionLeft">
                            <img src="/public/images/woman-holding-lab.jpg" alt="woman and dog" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error est. Dolorum eos odio facere doloremque ea corporis ab laborum laudantium iure asperiores! Error deserunt asperiores at? Molestiae, at exercitationem.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nam pariatur animi, distinctio accusamus harum eligendi eum saepe iusto nesciunt totam expedita fugiat est velit facilis numquam. Ex, distinctio repellendus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;