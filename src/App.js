import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <Router className="App bg-purple-500">
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className="container mx-auto px-3 pb-12"
        >
          Content
        </main>

        <Footer />
      </div>  

    </Router>
  );
}

export default App;


{/* <h1 className="text-3xl font-bold underline">
  Github Finder App        
</h1>      
<button className='btn btn-primary'>Daisy Class Button</button> */}