import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import GetStarts from "./Components/GetStarts/GetStarts";
import NavBar from "./Components/Navbar/NavBar";
import OurImpact from "./Components/OurImpact/OurImpact";
import Products from "./Components/Products/Products";
import PricingTools from "./Components/PricingTools/PricingTools";
import Workflow from "./Components/Workflow/Workflow";
import { useState } from "react";

const aiToolsPromise = fetch("/aiTool.json").then((res) => res.json());

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <NavBar cart={cart}></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <OurImpact></OurImpact>

        <Products
          cart={cart}
          setCart={setCart}
          aiToolsPromise={aiToolsPromise}
        ></Products>

        <GetStarts></GetStarts>
        <PricingTools></PricingTools>
        <Workflow></Workflow>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
