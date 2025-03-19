import "./services.css"
import Img from "../assets/Group 78.png"
function Services(){
    return(
        <>
        <div className="servicesWrapper">
            <div className="services">
                <div className="servicesLeft">
                    <h1>20 <br /> <span>Years Of Successful
Working
The Market</span></h1>
                    <button>Read More</button>
                </div>
                <div className="servicesRight">
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;