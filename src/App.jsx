import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
// import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Model2 from "./components/Model2";
console.log("")
// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model2 />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
// export default Sentry.withProfiler(App);
