import "./App.css";
import galactic from "./assets/galactic.jpeg";
import project1 from "./assets/project1.jpeg";
import project2 from "./assets/project2.jpeg";
import project3 from "./assets/project3.jpeg";
import project4 from "./assets/project4.jpeg";
function App() {

  const clients = [
    { name: "webflow", style: "italic" },
    { name: "REIGN", style: "handwritten" },
    { name: "UPSTACK", style: "bold" },
    { name: "RESTOK", style: "bold" },
    { name: "THIRDSPRING", style: "bold" },
    { name: "FieldTest", style: "italic" },
    { name: "Bettr", style: "bold" },
    { name: "FREESPIN", style: "bold" },
    { name: "Dualsport", style: "bold" },
  ]

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Foundation</a>
        <div className="center-links">
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <a href="#hire" className="hire-us">Hire Us</a>
      </div>
    </nav>
    <div className="content-container">
    <h1 className="main-heading">A design studio focused on pushing brands forward</h1>
    <img src={galactic} alt="Image" className="hero-image" />
    </div>

    <div className="lorem-text">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique. Duis suscipit, erat vitae auctor tincidunt.</p>
</div>
    <p className="edit">Start a project</p>
    <div className="scraa">
    <h2 className="shii">We work directly with <br></br> founders & visionaries.</h2>
    <h2 className="bih"><a href="">See our work</a></h2>
    </div>
    <br></br>
    <h2 className="Heds">Recent Projects</h2>
    <div className="image-container">
  <div className="row">
    <div className="project">
      <img src={project1} alt="Project 1" className="side-image" />
      <p className="image-text">Signspot</p>
    </div>
    <div className="project">
      <img src={project2} alt="Project 2" className="side-image" />
      <p className="image-text">Bettr</p>
    </div>
  </div>
  <div className="row">
    <div className="project">
      <img src={project3} alt="Project 3" className="side-image" />
      <p className="image-text">Sportshop</p>
    </div>
    <div className="project">
      <img src={project4} alt="Project 4" className="side-image" />
      <p className="image-text">Made Up</p>
    </div>
  </div>
</div>
    <h3>See all work</h3>

    
    <div className="clients-container">
      <h2 className="clients-title">Some of our clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className={`client ${client.style}`}>
            {client.name}
          </div>
        ))}
      </div>
    </div>
 
        <h1 className="almost">Interested in working with Foundation?<br></br> We'd love to hear from you.</h1>

        <h3 className="romero">Schedule a call</h3>

        <footer class="footer">
  <div class="footer-left">
    <p>© Foundation</p>
    <p>Powered by <a href="#">Webflow</a>.</p>
  </div>
  <div className="footer-right-container">
        <div className="footer-right">
          <div className="footer-column">
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Licenses</p>
            <p>Style Guide</p>
            <p>Changelog</p>
            <p>Password</p>
            <p>404</p>
          </div>
          <div className="footer-column">
            <p>Home 1</p>
            <p>Home 2</p>
            <p>Home 3</p>
            <p>Work 1</p>
            <p>Work 2</p>
            <p>Work 3</p>
          </div>
          <div className="footer-column">
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </footer>

    </>
  );
}


export default App;

