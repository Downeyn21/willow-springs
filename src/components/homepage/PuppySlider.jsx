import { puppyList } from "../../assets/FakePuppyList";

function PuppySlider() {
    return (  
        <div className="sliderWrapper">
            <h2>Available Puppies</h2>
            <div className="puppyContainer">
                {puppyList.map((puppy, index) => (
                    <div 
                    key={index} 
                    className="pupSingle"
                >
                        <img src={puppy.img} alt={`${puppy.name} picture not available`} />
                        <h3>{puppy.name}</h3>
                        <span>{puppy.age}</span>
                        <span>{puppy.breed}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PuppySlider;