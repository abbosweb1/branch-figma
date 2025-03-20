import "./blog.css"
import user1 from "../assets/pexels-pixabay-220453.png"
import user2 from "../assets/pexels-andrea-piacquadio-774909.png"
function Blog(){
    return(
        <>
    <div className="container">
      <div className="signup-box">
        <div className="testimonials">
          <div className="testimonial">
            <div className="testimonial-header">
              <img src={user1} alt="Louis Saville" className="avatar" />
              <div className="testimonial-info">
                <h4>Louis Saville</h4>
                <p>CEO at Google Inc</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="testimonial">
            <div className="testimonial-header">
              <img src={user2} alt="Rekha Varadwaz" className="avatar" />
              <div className="testimonial-info">
                <h4>Rekha Varadwaz</h4>
                <p>Manager at Nike Inc</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <h2 className="title">DON’T FORGET TO SIGN UP</h2>
        <hr className="divider" />
        <p className="description">
          Find out early about all upcoming promotions and new product releases with our newsletter.
        </p>
        <div className="signup-form">
          <input type="email" placeholder="Enter your email address..." className="email-input" />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
      </div>

    </div>
        </>
    )
}

export default Blog;