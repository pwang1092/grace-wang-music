import Navbar from "./Components/Navbar.js"; 
import Home from "./Components/Home.js"; 
import About from "./Components/About.js"; 
import Projects from "./Components/Projects.js";
import People from "./Components/People.js"; 
import Footer from "./Components/Footer.js"; 
import Gallery from "./Components/Gallery.js"; 
import Sponsors from "./Components/Sponsors.js";
import Contact from "./Components/Contact.js";
import Book from "./Components/Book.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Gallery></Gallery>
      <People></People>
      <Sponsors></Sponsors>
      <Book></Book>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App; 

