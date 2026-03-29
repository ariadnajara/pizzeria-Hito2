import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./views/Home";
import RegisterPage from "./views/RegisterPage";
// import LoginPage from "./views/LoginPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Ve probando uno a la vez comentando y descomentando */}
      {/* <Home /> */}
      <RegisterPage /> 
      {/* <LoginPage /> */}

      <Footer />
    </div>
  );
}

export default App;
