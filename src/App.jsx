import "./App.css";
import Banner from "./Components/Banner/Banner";
import GetStarts from "./Components/GetStarts/GetStarts";
import NavBar from "./Components/Navbar/NavBar";
import OurImpact from "./Components/OurImpact/OurImpact";
import Premium from "./Components/Premium/Premium";
import PricingTools from "./Components/PricingTools/PricingTools";
import Workflow from "./Components/Workflow/Workflow";

const aiToolsPromise = fetch("/public/aiTool.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <OurImpact></OurImpact>
        <Premium aiToolsPromise={aiToolsPromise}></Premium>
        <GetStarts></GetStarts>
        <PricingTools></PricingTools>
        <Workflow></Workflow>
      </main>
    </>
  );
}

export default App;
