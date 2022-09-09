import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          content
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
