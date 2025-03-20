import "./about.css"
import ImgOne from "../assets/Vector 3.png"
import ImgTwo from "../assets/Vector 5.png"
function About(){
    return(
        <>
         <div className="wrapper">
            <div className="services2">
                <div className="servicesTop">
                    <h1>3000+ Completed Workbr <br />
                    Which WE have Successfully Done</h1>
                </div>
                <div className="servicesBottom">
                    <div className="box box1">
                        <h1>980
                    <br /><span>Project</span></h1>
                    </div>
                    <img src={ImgOne} alt="" />
                    <div className="box box2">
                        <h1>520
                    <br /> <span>
                    Happy Client</span></h1>
                    </div>
                    <img src={ImgTwo} alt="" />
                    <div className="box box3">
                        <h1>330
                    <br /> <span>Winners</span></h1>
                    </div>
                    <img src={ImgOne} alt="" />
                    <div className="box box4">
                        <h1>120
                    <br /><span>
                    Recoment</span></h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;