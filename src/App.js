import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import { GithubProvider } from "./context/github/GithubContext.js";

function App() {
  return (
    <GithubProvider>
      <Router className="App bg-purple-500">
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />

            </Routes>
            
          </main>

          <Footer />
        </div>  

      </Router>
    </GithubProvider>
  );
}

export default App;


{/* <h1 className="text-3xl font-bold underline">
  Github Finder App        
</h1>      
<button className='btn btn-primary'>Daisy Class Button</button> */}