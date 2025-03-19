import img from "../assets/Group 63.png"
import "./projects.css"

function Projects(){
    return(
        <>
        <div className="projectWrapper">
            <div className="project">
                <div className="projectLeft">
                    <img src={img} alt="" />
                </div>
                <div className="projectRight">
                    <p>Projects</p>
                    <h1>Interioris The Will
                    of An Epoch Mextreo</h1>
                    <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form injected
humour, or randomised words which don't look even slightly
believable.If you are going to use a passage of Lorem Ipsum,
sure there isn't anything embarrassing hidden the middleof text.
All the Lorem Ipsum generators on the Internettend to repeat
predefined chunks as necessary,making this the first true
generator on the Internet.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;