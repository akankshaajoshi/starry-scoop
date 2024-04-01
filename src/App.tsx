import "./App.css";
import { Hero } from "@/components/component/hero";
import { Navbar } from "./components/component/navbar";
import { Contact } from "./components/component/contact";
import { Discussion } from "./components/component/discussion";
import { About } from "./components/component/about";
import { Footer } from "./components/component/footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <video src="/earth.mp4" className="absolute inset-0 w-full h-full object-cover z-[-1]" autoPlay loop muted />
        <div className="relative z-10">
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Discussion></Discussion>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
