import Gr from "../assets/Group 63.png"
import "./home.css"

function Home(){
    return(
        <>
        <div className="homeWrapper">
            <div className="home">
                <div className="homeLeft">
                    <p>MODERN INTERIOR</p>
                    <h1>Create Your
                    Interior <br /> Design.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation.</p>
                    <button>CONTACT</button>
                </div>
                <div className="homeRight">
                    <img src={Gr} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;