import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Hero />
      <Intro />
      <Steps />
      <Guide />
      <Testimonials />
      <Banner />
      <Featured />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
