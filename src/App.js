import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Alert from "./components/layout/Alert.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import User from "./components/pages/User.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import { GithubProvider } from "./context/github/GithubContext.js";
import { AlertProvider } from "./context/alert/AlertContext.js";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router className="App bg-purple-500">
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              
              <Alert />
              
              <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />

              </Routes>
              
            </main>

            <Footer />
          </div>  

        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;


{/* <h1 className="text-3xl font-bold underline">
  Github Finder App        
</h1>      
<button className='btn btn-primary'>Daisy Class Button</button> */}