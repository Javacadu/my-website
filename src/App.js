import { Route, Routes } from "react-router-dom"; // Change Switch to Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NavBar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <main>
      <>
        <div 
          id="content-container" className="{}"
        >
          <header 
            className="fade-in"
          >
            <NavBar />
          </header>
          <Routes> {/* Change Switch to Routes */}
            <Route path="/" element={<Home />} /> {/* Change Component to element */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<PathNotFound />} /> {/* Handle 404 */}
          </Routes>
        </div>
      </>
    </main>
  );
}

function PathNotFound() {
  return <h3>Error 404 - Page Not Found!</h3>;
}



/*
React 18), Switch has been replaced by Routes, 
and Route component's component prop has been 
replaced by element prop for specifying the component to render. 
Also, exact prop has been removed.
*/